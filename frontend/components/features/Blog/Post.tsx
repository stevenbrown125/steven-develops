import { PostProps } from "@/types/Post"
import { format } from "date-fns"
import Figure from "../../core/Figure/Figure"
import Link from "next/link"
import { FaTag } from "react-icons/fa6"
import RichText from "@/components/shared/utilities/RichText"

export default function Post({ post }: PostProps) {
  const { title, image, publishedAt, alt, category, tags } = post
  const date = format(new Date(publishedAt), "EEEE MMMM do, yyyy")
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
        <p className="py-2 text-xs tracking-wide">
          Published on
          <time dateTime={publishedAt} itemProp="datePublished">
            {date}
          </time>
          in{" "}
          <Link
            href={`/blog/categories/${category.slug}`}
            itemProp="articleSection"
          >
            {category.title}
          </Link>
          <span className="sr-only">
            by <span itemProp="author">Steven Brown</span>
          </span>
        </p>
        <Figure figure={{ href: image, alt }} />
      </header>
      <section
        itemProp="articleBody"
        className="max-w-full prose dark:prose-invert"
      >
        <RichText content={post.body} />
      </section>
      <footer className="flex justify-between mt-4 text-sm">
        <ul itemProp="keywords" className="flex items-center gap-2">
          {tags.map((tag) => (
            <li
              key={`tag-${tag.title}`}
              className="flex items-center gap-1 hover:text-primary"
            >
              <FaTag />
              <Link
                href={`/blog/tags/${tag.slug}`}
                className="flex items-center gap-1 hover:text-primary"
              >
                {tag.title}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}
