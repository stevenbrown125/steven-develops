// File: /components/features/Contact/ContactForm.tsx

"use client";

import { useState, FormEvent } from "react";
import { useRecaptcha } from "@/providers/RecaptchaProvider";
import RecaptchaText from "@/components/shared/utilities/RecaptchaText";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { executeRecaptcha } = useRecaptcha();
  const startedAt = useState(() => Date.now())[0];

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Errors = {};
    if (values.name.trim().length < 2 || values.name.length > 100)
      nextErrors.name = "Please enter your name.";
    if (!EMAIL_REGEX.test(values.email))
      nextErrors.email = "Please enter a valid email.";
    if (values.phone && values.phone.length > 20)
      nextErrors.phone = "Invalid phone number.";
    if (values.message.trim().length < 10 || values.message.length > 2000)
      nextErrors.message = "Message must be at least 10 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting || !validate() || values.city) return;
    if (Date.now() - startedAt < 3000) return;
    if (!executeRecaptcha) return;

    setSubmitting(true);
    try {
      const gRecaptchaToken = await executeRecaptcha("contactFormSubmit");
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({ ...values, gRecaptchaToken, startedAt }),
      });
    } finally {
      setSubmitting(false);
    }
  };

  const update =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-y-2 text-sm"
    >
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
        disabled={submitting}
        className="mt-2 inline-flex justify-center rounded bg-primary px-6 py-1.5 text-white hover:opacity-80 disabled:opacity-50"
      >
        Send Message
      </button>

      <RecaptchaText />
    </form>
  );
}
