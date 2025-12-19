// components/TagList.tsx

import { slugify } from "@/lib/utils";
import Link from "next/link";
import { FaTag } from "react-icons/fa";

interface TagListProps {
  tags?: string[];
  className?: string;
}

export function TagList({ tags, className }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <ul
      itemProp="keywords"
      className={[
        "flex flex-wrap gap-2",
        "text-[11px]",
        "max-w-full overflow-hidden",
        className,
      ].join(" ")}
    >
      {tags.map((tag) => {
        const tagSlug = slugify(tag);

        return (
          <li key={tagSlug} className="max-w-full">
            <Link
              href={`/blog/tags/${tagSlug}`}
              className="
                inline-flex max-w-full items-center gap-1
                rounded-full border border-neutral-200
                px-2 py-0.5
                text-neutral-500 transition-colors
                hover:border-primary hover:text-primary
                dark:border-neutral-700
                break-words
              "
            >
              <FaTag className="shrink-0 opacity-60" />
              <span className="truncate">{tag}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
