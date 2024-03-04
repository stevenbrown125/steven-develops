export interface Contact {
  name: string
  email: string
  phone: string
  message: string
  gRecaptchaToken: string
}

export interface ContactFormValues extends Contact {
  [key: string]: string
}
