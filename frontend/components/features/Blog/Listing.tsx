import { Post } from "@/types/Post";
import { format } from "date-fns";
import Link from "next/link";
import Figure from "../../core/Figure/Figure";

export default function Listing({ post }: { post: Post }) {
  const { title, excerpt, slug, image, alt, publishedAt } = post;
  const date = new Date(publishedAt);

  return (
    <Link href={`/blog/post/${slug}`} itemProp="url" className="mx-auto max-w-7xl mt-4 pb-6 bg-zinc-300/40 dark:bg-zinc-700/40 lg:rounded-b-md shadow-xl z-10 relative grow-0 group max-w-full transition duration-300 ease-in-out hover:-translate-y-2">
      <article itemProp="itemListElement" itemScope itemType="http://schema.org/Article">
        <header className="mb-2">
          <Figure figure={{ href: image, alt, classes: 'listing' }} />
          <h3 itemType="headline" className="mx-4 hover:text-primary text-center heading-hr">{title}</h3>
          <p className="px-2 text-xs md:text-sm pt-1 text-center">
            Written on
            <time
              dateTime={publishedAt}
              itemType="datePublished"
            >
              {format(date, "EEEE MMMM do, yyyy")}
            </time>
          </p>
        </header>
        <section className="px-4 md:px-8">
          <p itemProp="description">
            {excerpt}..{" "}
            <span className="text-sm italic border-b border-primary border-dotted hover:text-primary">Read more</span>
          </p>
        </section>
      </article>
    </ Link>
  );
}
