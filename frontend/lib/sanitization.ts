import sanitizeHtml from "sanitize-html"
import { Contact, ContactFormValues } from "@/types/Contact"

export const sanitizeContactData = (values: Contact) => {
  let sanitizedValues: ContactFormValues = {} as ContactFormValues
  for (const key in values) {
    if ((values as ContactFormValues)[key] !== undefined) {
      sanitizedValues[key] = sanitizeHtml((values as ContactFormValues)[key])
    } else {
      sanitizedValues[key] = ""
    }
  }
  return sanitizedValues
}
