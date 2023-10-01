import { Post } from "@/app/types/Post";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function PostListing({ post }: { post: Post }) {
  const { title, excerpt, slug, image, alt, publishedAt } = post;
  const date = new Date(publishedAt);
  const mainImage = image && (
    <figure className="relative">
      <div className="h-32 md:h-72 flex flex-col w-full relative">
        <Image
          src={image}
          alt={alt}
          className="object-cover object-bottom"
          fill
        />
      </div>
      <figcaption className="px-4 mt-2 absolute right-0 text-sm italic">
        {alt}
      </figcaption>
    </figure>
  );
  return (
    <article className="max-w-5xl mx-auto text-lg bg-neutral-50 mb-4 md:mb-8 lg:rounded-b-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
      {mainImage}

      <div className="px-4 py-6 md:px-8">
        <Link href={`/blog/${slug}`}>
          <h2
            itemType="headline"
            className="border-b-2 border-orange-600 hover:text-orange-600"
          >
            {title}
          </h2>
        </Link>
        <small className="text-base">
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
              href={`/blog/${slug}`}
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
