// lib/helpers/verifyCaptcha.ts

interface CaptchaVerificationResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
  score?: number;
  action?: string;
}

export async function verifyCaptcha(
  token: string
): Promise<CaptchaVerificationResponse> {
  const secretKey = process.env.GOOG_CAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing reCAPTCHA secret key");
  }

  const response = await fetch(
    "https://www.recaptcha.net/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to verify reCAPTCHA");
  }

  return (await response.json()) as CaptchaVerificationResponse;
}
