import { Post } from "@/app/types/Post";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Image from "next/image";

export default function BlogPost({ post }: { post: Post }) {
  const { title, image, publishedAt, alt } = post;
  const date = new Date(publishedAt);
  const mainImage = image && (
    <figure className="relative">
      <div className="h-48 md:h-96 flex flex-col w-full relative">
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
    <article className="max-w-5xl mx-auto text-lg bg-neutral-50 lg:rounded-br-md lg:rounded-tl-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
      {mainImage}
      <div className="px-8 py-4">
        <h2 itemType="headline" className="border-b-2 border-orange-600">
          {title}
        </h2>
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
        <section className="text-lg">
          <PortableText value={post.body} />
        </section>
      </div>
    </article>
  );
}
