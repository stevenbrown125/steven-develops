import { Post } from "@/app/types/Post";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Image from "next/image";

//TODO Refactor Sanity to work with images better for SEO and Accessibility
//TODO This includes adding an except for the post (can be auto generated?)
export default function BlogPost({ post }: { post: Post }) {
  const { title, image, publishedAt, alt } = post;
  const date = new Date(publishedAt);
  const mainImage = image && (
    <figure className="relative h-96">
      <Image
        src={image}
        alt={alt}
        className="w-full object-cover rounded-tl-md "
        fill
      />
      <figcaption className="text-right text-sm italic">{alt}</figcaption>
    </figure>
  );

  return (
    <article className="max-w-5xl px-4 py-6 mx-auto text-lg bg-stone-50 md:px-8 md:mb-8 lg:rounded-br-md lg:rounded-tl-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
      {mainImage}
      <h2 itemType="headline" className="border-b-2 border-orange-600">
        {title}
      </h2>
      <small>
        Written on
        <time dateTime={publishedAt} itemType="datePublished" className="pl-1">
          {format(date, "EEEE MMMM do, yyyy")}
        </time>
      </small>
      <section className="text-lg">
        <PortableText value={post.body} />
      </section>
    </article>
  );
}
