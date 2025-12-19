// File: /app/contact/page.tsx

import type { Metadata } from "next";

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import ContactForm from "@/components/features/Contact/ContactForm";
import ContactFigure from "@/components/features/Contact/ContactFigure";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(seoContent.contact).metadata;

export default function ContactPage() {
  return (
    <div className="relative flex-grow px-4 py-6 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={[{ href: "/contact", title: "Contact" }]} />
      <section className="mt-6">
        <h2 className="heading-hr mb-4">Contact</h2>
        <div className="flex flex-col gap-8 2xl:flex-row 2xl:gap-12">
          <div className="order-2 2xl:order-1 2xl:max-w-2xl dark:text-zinc-200">
            <p className="mb-4">
              Have questions or need a quote? Fill out the form and I’ll get
              back to you shortly.
            </p>
            <ContactForm />
          </div>
          <div className="order-1 w-full 2xl:order-2 2xl:w-[500px]">
            <ContactFigure />
          </div>
        </div>
      </section>
    </div>
  );
}
