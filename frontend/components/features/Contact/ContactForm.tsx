// File: /components/features/Contact/ContactForm.tsx

"use client";

import React, { useEffect, useRef, useState, type FormEvent } from "react";
import { useRecaptcha } from "@/providers/RecaptchaProvider";
import RecaptchaText from "@/components/shared/utilities/RecaptchaText";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitStatus =
  | { kind: "idle" }
  | { kind: "info"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const COOLDOWN_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY_LAST_SUBMIT_AT = "contactForm:lastSubmittedAtMs";

function safeReadLastSubmittedAtMs(): number | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LAST_SUBMIT_AT);
    if (!raw) return null;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= 0) return null;
    return parsed;
  } catch {
    return null;
  }
}

function safeWriteLastSubmittedAtMs(timestampMs: number): void {
  try {
    localStorage.setItem(STORAGE_KEY_LAST_SUBMIT_AT, String(timestampMs));
  } catch {
    // ignore (private mode / blocked storage)
  }
}

function formatRemaining(ms: number): string {
  const clamped = Math.max(0, ms);
  const totalMinutes = Math.ceil(clamped / (60 * 1000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours <= 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

export default function ContactForm() {
  const { executeRecaptcha } = useRecaptcha();

  // Anti-bot "time on page" start
  const startedAtRef = useRef<number>(Date.now());

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "", // honeypot
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });

  const [lastSubmittedAtMs, setLastSubmittedAtMs] = useState<number | null>(
    null
  );

  useEffect(() => {
    const last = safeReadLastSubmittedAtMs();
    setLastSubmittedAtMs(last);

    if (last && Date.now() - last < COOLDOWN_MS) {
      const remainingMs = COOLDOWN_MS - (Date.now() - last);
      setStatus({
        kind: "info",
        message: `You’ve already submitted recently. Try again in ${formatRemaining(
          remainingMs
        )}.`,
      });
    }
  }, []);

  const isInCooldown =
    lastSubmittedAtMs !== null && Date.now() - lastSubmittedAtMs < COOLDOWN_MS;

  const validate = (): boolean => {
    const nextErrors: Errors = {};

    if (values.name.trim().length < 2 || values.name.length > 100) {
      nextErrors.name = "Please enter your name.";
    }
    if (!EMAIL_REGEX.test(values.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (values.phone && values.phone.length > 20) {
      nextErrors.phone = "Invalid phone number.";
    }
    if (values.message.trim().length < 10 || values.message.length > 2000) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const update =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (status.kind !== "idle") setStatus({ kind: "idle" });
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    // 24h cooldown check (client-side)
    const last = safeReadLastSubmittedAtMs();
    if (last && Date.now() - last < COOLDOWN_MS) {
      const remainingMs = COOLDOWN_MS - (Date.now() - last);
      setLastSubmittedAtMs(last);
      setStatus({
        kind: "info",
        message: `You’ve already submitted recently. Try again in ${formatRemaining(
          remainingMs
        )}.`,
      });
      return;
    }

    // Honeypot filled => likely bot
    if (values.city) {
      setStatus({ kind: "info", message: "Submission blocked." });
      return;
    }

    // Minimum time-on-page check
    const msOnPage = Date.now() - startedAtRef.current;
    if (msOnPage < 3000) {
      setStatus({
        kind: "info",
        message: "Please wait a moment and try again.",
      });
      return;
    }

    if (!validate()) return;

    if (!executeRecaptcha) {
      setStatus({
        kind: "info",
        message: "reCAPTCHA is still loading. Please try again in a moment.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ kind: "info", message: "Sending…" });

    try {
      const gRecaptchaToken = await executeRecaptcha("contactFormSubmit");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({
          ...values,
          gRecaptchaToken,
          startedAt: startedAtRef.current,
        }),
      });

      if (!res.ok) {
        const contentType = res.headers.get("content-type") ?? "";
        const bodyText = contentType.includes("application/json")
          ? JSON.stringify(await res.json())
          : await res.text();

        setStatus({
          kind: "error",
          message:
            bodyText?.trim() ||
            `Request failed (HTTP ${res.status}). Please try again.`,
        });
        return;
      }

      // Mark successful submission for 24h cooldown
      const now = Date.now();
      safeWriteLastSubmittedAtMs(now);
      setLastSubmittedAtMs(now);

      setStatus({
        kind: "success",
        message: "Message sent. I’ll get back to you shortly.",
      });

      setErrors({});
      setValues({ name: "", email: "", phone: "", message: "", city: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        kind: "error",
        message: "Something went wrong sending your message. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const submitDisabled = submitting || isInCooldown;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-y-2 text-sm"
    >
      {/* Status */}
      <div className="min-h-[1.25rem]">
        {status.kind !== "idle" ? (
          <p
            className={[
              "text-xs",
              status.kind === "success" ? "text-green-600" : "",
              status.kind === "error" ? "text-red-500" : "",
              status.kind === "info" ? "text-zinc-600 dark:text-zinc-300" : "",
            ].join(" ")}
          >
            {"message" in status ? status.message : null}
          </p>
        ) : null}
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="font-medium text-zinc-700 dark:text-zinc-200"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          value={values.name}
          onChange={update("name")}
          className="w-full rounded border border-zinc-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        <p className="min-h-[1rem] text-xs text-red-500">
          {errors.name ?? "\u00A0"}
        </p>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="font-medium text-zinc-700 dark:text-zinc-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          value={values.email}
          onChange={update("email")}
          className="w-full rounded border border-zinc-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        <p className="min-h-[1rem] text-xs text-red-500">
          {errors.email ?? "\u00A0"}
        </p>
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="font-medium text-zinc-700 dark:text-zinc-200"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={20}
          value={values.phone}
          onChange={update("phone")}
          className="w-full rounded border border-zinc-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        <p className="min-h-[1rem] text-xs text-red-500">
          {errors.phone ?? "\u00A0"}
        </p>
      </div>

      {/* Honeypot */}
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute invisible h-px w-px"
        value={values.city}
        onChange={update("city")}
      />

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="font-medium text-zinc-700 dark:text-zinc-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={3}
          value={values.message}
          onChange={update("message")}
          className="w-full rounded border border-zinc-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
        />
        <p className="min-h-[1rem] text-xs text-red-500">
          {errors.message ?? "\u00A0"}
        </p>
      </div>

      <button
        type="submit"
        disabled={submitDisabled}
        className="mt-2 inline-flex justify-center rounded bg-primary px-6 py-1.5 text-white hover:opacity-80 disabled:opacity-50"
      >
        {submitting
          ? "Sending…"
          : isInCooldown
          ? "Sent (24h cooldown)"
          : "Send Message"}
      </button>

      <RecaptchaText />
    </form>
  );
}
