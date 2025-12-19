// components/features/Blog/PostHeader.tsx

import Link from "next/link";
import Figure from "@/components/core/Figure/Figure";
import { formatDate } from "@/lib/formatDate";
import { PostProps } from "@/types/Post";
import { slugify } from "@/lib/utils";
import { TagList } from "./TagList";

type Props = Pick<
  PostProps["post"],
  "title" | "image" | "alt" | "publishedAt" | "category" | "tags"
>;

export default function PostHeader({
  title,
  image,
  alt,
  publishedAt,
  category,
  tags,
}: Props) {
  const categorySlug = slugify(category);

  return (
    <header className="mb-10">
      <h1 itemProp="headline" className="heading-hr text-3xl font-heading">
        {title}
      </h1>

      <div className="mt-2 flex flex-col gap-3 text-xs tracking-wide text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-start sm:justify-between">
        {/* Category + date */}
        <p>
          Published on{" "}
          <time
            dateTime={publishedAt}
            itemProp="datePublished"
            className="font-medium text-neutral-700 dark:text-neutral-300"
          >
            {formatDate(publishedAt)}
          </time>{" "}
          · In{" "}
          <Link
            href={`/blog/categories/${categorySlug}`}
            itemProp="articleSection"
            className="font-medium transition-colors hover:text-primary"
          >
            {category}
          </Link>
          <span className="sr-only">
            by <span itemProp="author">Steven Brown</span>
          </span>
        </p>

        <TagList tags={tags} className="justify-start sm:justify-end" />
      </div>

      {image && (
        <div className="mt-6">
          <Figure figure={{ href: image, alt }} />
        </div>
      )}
    </header>
  );
}
