import ContactCard from "@/components/shared/utilities/ContactCard"
import { Layout } from "@/types"

export default function BlogLayout({ children }: Layout) {
  return (
    <>
      {children}
      <ContactCard />
    </>
  )
}
