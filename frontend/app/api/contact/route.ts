// app/api/contact/route.ts

import { NextRequest } from "next/server";
import { ContactRequest, ContactFormValues } from "@/types/Contact";
import { verifyCaptcha } from "../helpers/verifyCaptcha";
import { sanitizeContactData, validateContactData } from "@/lib/sanitization";
import { createSendContactEmailTemplateCommand } from "@/lib/aws/createSendContactEmailTemplateCommand";
import { sesClient } from "@/lib/aws/sesClient";

export async function POST(request: NextRequest) {
  let req: ContactRequest;

  try {
    req = await request.json();
  } catch {
    return Response.json({ ok: true });
  }

  try {
    const { gRecaptchaToken, city, startedAt, ...userInput } = req;

    // Honeypot
    if (city) return Response.json({ ok: true });

    // Timing heuristic
    if (typeof startedAt === "number" && Date.now() - startedAt < 3000) {
      return Response.json({ ok: true });
    }

    const captchaResult = await verifyCaptcha(gRecaptchaToken);

    if (
      !captchaResult.success ||
      captchaResult.action !== "contactFormSubmit" ||
      (captchaResult.score ?? 1) < 0.5
    ) {
      return Response.json({ ok: true });
    }

    if (userInput.message.length > 2000) {
      return Response.json({ ok: true });
    }

    const sanitized = sanitizeContactData(userInput);
    validateContactData(sanitized);
    await sesClient.send(
      createSendContactEmailTemplateCommand(sanitized as ContactFormValues)
    );

    return Response.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("CONTACT FORM ERROR", error);
    return Response.json({ ok: true });
  }
}
