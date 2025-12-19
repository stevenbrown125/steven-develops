// lib/sanitizeContactData.ts

import { ContactFormValues } from "@/types/Contact";

/**
 * Strips HTML tags and normalizes whitespace.
 * Intended strictly for plain-text user inputs.
 */
const sanitizePlainText = (value: string): string => {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * Sanitizes ONLY user-facing contact form fields.
 * Transport fields must never reach this function.
 */
export const sanitizeContactData = (
  values: ContactFormValues
): ContactFormValues => {
  return {
    name: sanitizePlainText(values.name),
    email: sanitizePlainText(values.email),
    phone: values.phone ? sanitizePlainText(values.phone) : "",
    message: sanitizePlainText(values.message),
  };
};

/**
 * Server-side validation (authoritative).
 * Throwing is fine — caller handles control flow.
 */
export const validateContactData = (values: ContactFormValues) => {
  if (values.name.length < 2 || values.name.length > 100) {
    throw new Error("Invalid name");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    throw new Error("Invalid email");
  }

  if (values.phone && values.phone.length > 20) {
    throw new Error("Invalid phone");
  }

  if (values.message.length < 10 || values.message.length > 2000) {
    throw new Error("Invalid message");
  }
};
