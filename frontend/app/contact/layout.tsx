import { Layout } from "@/types";

export default function ContactLayout({ children }: Layout) {
    return <div className="px-4 lg:px-8 py-4">{children}</div>;
}