import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
    );
}