import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import ContactForm from "@/components/features/ContactForm/ContactForm"
import Figure from "@/components/core/Figure/Figure"

export default function ContactPage() {
  return (
    <div className="relative flex-grow mx-auto max-w-7xl">
      <Breadcrumbs breadcrumbs={[{ href: "/contact", title: "Contact" }]} />
      <section className="animate-fade-in-slide-down">
        <header>
          <h2 className="heading-hr">Contact</h2>
        </header>
        <div className="flex flex-col 2xl:flex-row">
          <div className="flex-1 order-2 mx-2 mt-6 space-y-4 2xl:max-w-2xl 2xl:mt-0 2xl:mx-0 2xl:mr-6 dark:text-zinc-200 2xl:order-1">
            <p>
              Do you have questions, comments, concerns? Do you need a quote for
              a web project or want to hire me part time? Are you looking for my
              offical resume? Awesome! Please fill out the provided form and I
              will get back to you as soon as possible. I&rsquo;m looking
              forward to hearing from you!
            </p>
            <ContactForm />
          </div>
          <div className="w-full 2xl:w-[540px] order-1 2xl:order-2">
            <Figure
              figure={{
                href: "/images/rome-optimized.jpg",
                alt: "Rome, Italy 2020",
                classes:
                  "2xl:mt-6 opacity-80 relative z-10 vertical-hr md:ml-6",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
