import { Post } from "@/types/Post";
import { format } from "date-fns";
import Link from "next/link";
import Figure from "../Figure";

export default function Listing({ post }: { post: Post }) {
  const { title, excerpt, slug, image, alt, publishedAt } = post;
  const date = new Date(publishedAt);

  return (
    <Link href={`/blog/post/${slug}`} className="listing" itemProp="url">
      <article itemProp="itemListElement" itemScope itemType="http://schema.org/Article">
        <header>
          <Figure figure={{ href: image, alt, classes: 'listing' }} />
          <h3 itemType="headline">{title}</h3>
          <small>
            Written on
            <time
              dateTime={publishedAt}
              itemType="datePublished"
            >
              {format(date, "EEEE MMMM do, yyyy")}
            </time>
          </small>
        </header>
        <section>
          <p itemProp="description">
            {excerpt}..{" "}
            <span>Read more</span>
          </p>
        </section>
      </article>
    </ Link>
  );
}
