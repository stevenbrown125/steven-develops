// File: components/features/Blog/ListingPage.tsx

"use client";

import { useMemo, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

import PostGrid from "./PostGrid";
import Breadcrumbs, {
  BreadcrumbLink,
} from "@/components/shared/utilities/Breadcrumb";
import ListingHeader from "@/components/shared/utilities/ListingHeader";
import { groupPostsByYears, sortPostYears } from "@/lib/postHelpers";
import type { Listable } from "@/types";

type SortKey = "asc" | "desc";

interface ListingPageProps<T extends Listable> {
  title: string;
  breadcrumbs: BreadcrumbLink[];
  posts: T[];
  emptyState?: ReactNode;
}

const ListingPage = <T extends Listable>({
  title,
  breadcrumbs,
  posts,
  emptyState,
}: ListingPageProps<T>) => {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const isAscending = sortParam === "asc";

  const { years, groupedPosts } = useMemo(() => {
    const grouped = groupPostsByYears(posts, isAscending);
    const sortedYears = sortPostYears(grouped, isAscending);
    return { years: sortedYears, groupedPosts: grouped };
  }, [posts, isAscending]);

  const isEmpty = posts.length === 0;
  const sortKey: SortKey = isAscending ? "asc" : "desc";

  return (
    <div className="relative mx-auto flex-grow max-w-7xl px-4 py-4 lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ListingHeader title={title} isAscending={isAscending} />

      {isEmpty ? (
        <div className="mt-8 text-center">
          {emptyState ?? (
            <p className="text-neutral-500 dark:text-neutral-400">
              Nothing here yet.
            </p>
          )}
        </div>
      ) : (
        years.map((year) => {
          const postsForYear = groupedPosts.get(year);
          if (!postsForYear || postsForYear.length === 0) return null;

          return (
            <section key={year} className="relative">
              <h3 className="mt-2 pl-2 text-xl font-bold dark:text-zinc-400">
                {year}
              </h3>

              <PostGrid posts={postsForYear} sortKey={sortKey} />
            </section>
          );
        })
      )}
    </div>
  );
};

export default ListingPage;
