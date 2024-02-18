"use client"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={
                process.env.GOOG_CAPTCHA_SITE_KEY ||
                "6LejZ3cpAAAAADIfalTrAbN1wXrbW_s3cMOxI9rv"
            }
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <ThemeProvider>
                <SidebarProvider>{children}</SidebarProvider>
            </ThemeProvider>
        </GoogleReCaptchaProvider>
    );
}