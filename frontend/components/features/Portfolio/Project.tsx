import { format } from "date-fns"
import Figure from "../../core/Figure/Figure"
import Link from "next/link"
import { FaTag } from "react-icons/fa6"
import { ProjectProps } from "@/types"
import RichText from "@/components/shared/utilities/RichText"

export default function Project({ project }: ProjectProps) {
  const { title, image, startDate, completionDate, technologies, body } =
    project
  const start = format(new Date(startDate), "EEEE MMMM do, yyyy")
  const { href, alt } = image
  return (
    <article
      className="animate-fade-in-slide-down"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <h2 itemProp="headline" className="heading-hr">
          {title}
        </h2>
        <small>
          Started on
          <time dateTime={startDate} itemProp="datePublished">
            {start}
          </time>
          {completionDate
            ? `and completed on ${format(new Date(completionDate), "EEEE MMMM do, yyyy")}`
            : "and ongoing."}
          <span className="sr-only">
            by <span itemProp="author">Steven Brown</span>
          </span>
        </small>
        <Figure figure={{ href, alt }} />
      </header>
      <section
        itemProp="articleBody"
        className="max-w-full prose dark:prose-invert"
      >
        <RichText content={body as any} />
      </section>
      <footer className="flex justify-between mt-4 text-sm">
        <ul itemProp="keywords" className="flex items-center gap-2">
          {technologies.map((technology) => (
            <li
              key={`tag-${technology.title}`}
              className="flex items-center gap-1 hover:text-primary"
            >
              <FaTag />
              <Link
                href={`/portfolio/technologies/${technology.slug}`}
                className="flex items-center gap-1  hover:text-primary"
              >
                {technology.title}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}
