// components/features/Blog/CategoryCard.tsx

import Link from "next/link";

export interface Category {
  title: string;
  slug: string;
  count: number;
}

/**
 * Map post count → bar width (clamped).
 */
function widthFromCount(count: number) {
  return Math.min(100, 20 + count * 4); // %
}

/**
 * Map post count → theme intensity.
 */
function barColorFromCount(count: number) {
  if (count >= 15) return "bg-primary";
  if (count >= 8) return "bg-primary/60";
  return "bg-primary/30";
}

const CategoryCard = ({ category }: { category: Category }) => {
  const { title, slug, count } = category;

  return (
    <Link
      href={`/blog/categories/${slug}`}
      className="
        group
        block
        py-3
        transition-colors
      "
    >
      {/* label row */}
      <div className="mb-1 flex items-center justify-between">
        <h3 className="font-medium group-hover:text-primary transition-colors">
          {title}
        </h3>

        <span className="text-sm text-neutral-500">{count}</span>
      </div>

      {/* bar */}
      <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <div
          className={`
            h-1
            rounded
            transition-all
            ${barColorFromCount(count)}
          `}
          style={{ width: `${widthFromCount(count)}%` }}
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
