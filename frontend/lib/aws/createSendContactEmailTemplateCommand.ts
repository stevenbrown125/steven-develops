import { ContactFormValues } from "@/types/Contact"
import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses"

const toAddress = process.env.SES_TO_ADDRESS || "sbrown+bliztek@bliztek.com"
const fromAddress = process.env.SES_FROM_ADDRESS || "sbrown+bliztek@bliztek.com"

export const createSendContactEmailTemplateCommand = (
  contact: ContactFormValues,
) => {
  const templateName = "Steven_Develops_Contact"

  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },

    TemplateData: JSON.stringify({ contact }),
    Template: templateName,
    Source: fromAddress,
  })
}
