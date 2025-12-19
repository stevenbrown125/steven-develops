import ContactCard from "@/components/shared/utilities/ContactCard";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ContactCard />
    </>
  );
}
