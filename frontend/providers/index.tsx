"use client"
import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";
import { RecaptchaProvider } from "./RecaptchaProvider";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <RecaptchaProvider siteKey=

            "6LejZ3cpAAAAADIfalTrAbN1wXrbW_s3cMOxI9rv"

            nonce="none"
        >
            <ThemeProvider>
                <SidebarProvider>{children}</SidebarProvider>
            </ThemeProvider>
        </RecaptchaProvider>
    );
}