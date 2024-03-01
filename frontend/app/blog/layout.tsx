import { Layout } from "@/types"

export default function BlogLayout({ children }: Layout) {
  return <div className="px-4 py-4 lg:px-8 ">{children}</div>
}
