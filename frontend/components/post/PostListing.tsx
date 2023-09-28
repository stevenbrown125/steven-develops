import { Post } from "@/app/types/Post";
import { format } from "date-fns";
import Link from "next/link";

export default function PostListing({ post }: { post: Post }) {
  const { title, excerpt, slug, image, alt, publishedAt } = post;
  const date = new Date(publishedAt);
  const mainImage = image && (
    <figure className="relative h-96 align-baseline">
      <div className="h-48 flex flex-col w-full">
        <img
          src={image}
          alt={alt}
          className="h-96 object-cover rounded-tl-md"
        />
        <figcaption className="px-4 text-sm italic text-right">
          {alt}
        </figcaption>
      </div>
    </figure>
  );
  return (
    <article className="max-w-5xl mx-auto text-lg bg-stone-50 md:mb-8 lg:rounded-br-md lg:rounded-tl-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
      {mainImage}

      <div className="px-4 py-6 md:px-8">
        <Link href={`blog/${slug}`}>
          <h2
            itemType="headline"
            className="border-b-2 border-orange-600 hover:text-orange-600"
          >
            {title}
          </h2>
        </Link>
        <small>
          Written on
          <time
            dateTime={publishedAt}
            itemType="datePublished"
            className="pl-1"
          >
            {format(date, "EEEE MMMM do, yyyy")}
          </time>
        </small>
        <section>
          <p className="text-lg">
            {excerpt}..{" "}
            <Link
              href={`blog/${slug}`}
              className="italic hover:text-orange-600 text-sm"
            >
              {" "}
              Read more
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
