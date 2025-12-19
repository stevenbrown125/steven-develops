// types/Contact.ts

// types/Contact.ts

// What the user actually submits in the form
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// What the API endpoint receives (transport envelope)
export interface ContactRequest extends ContactFormValues {
  city?: string; // honeypot
  startedAt?: number; // timing heuristic
  gRecaptchaToken: string; // captcha
}
