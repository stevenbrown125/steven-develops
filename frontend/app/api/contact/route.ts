import { Contact, ContactFormValues } from "@/types/Contact";
import { NextRequest } from "next/server";
import { verifyCaptcha } from "../helpers/verifyCaptcha";
import { sanitizeContactData } from "@/lib/sanitization";
import { contactSchema } from "@/lib/validation";
import { createSendContactEmailTemplateCommand } from "@/lib/aws/createSendContactEmailTemplateCommand";
import { sesClient } from "@/lib/aws/sesClient";

export async function POST(request: NextRequest) {
  const req: Contact = await request.json();

  try {
    const { gRecaptchaToken } = req;

    if (!gRecaptchaToken) {
      return Response.json({ error: "reCAPTCHA token is missing" }, { status: 422 });
    }
    const captchaResult = await verifyCaptcha(gRecaptchaToken);

    if (!captchaResult.success) {
      return Response.json({
        error: "Invalid reCAPTCHA token",
        details: captchaResult["error-codes"],
      }, { status: 422 });
    }

    const sanitizedData = sanitizeContactData(req);

    const validatedData = await contactSchema.validate(sanitizedData, { abortEarly: false });

    const sendEmailCommand = createSendContactEmailTemplateCommand(validatedData as ContactFormValues);

    const response = await sesClient.send(sendEmailCommand);

    console.log(response)
  } catch (error) {
    console.log('EMAIL ERROR - ', error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
  return Response.json({ req }, { status: 200 })
}

