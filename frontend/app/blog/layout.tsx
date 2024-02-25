import { Layout } from "@/types";

export default function BlogLayout({ children }: Layout) {
  return <div className="px-4 lg:px-8 py-4 ">{children}</div>;
}
