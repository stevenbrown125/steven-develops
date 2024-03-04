import ContactCard from "@/components/shared/utilities/ContactCard"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <ContactCard />
    </>
  )
}
