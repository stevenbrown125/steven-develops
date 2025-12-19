// components/features/Blog/ListingPage.tsx

"use client";

import PostGrid from "./PostGrid";
import Breadcrumbs, {
  BreadcrumbLink,
} from "@/components/shared/utilities/Breadcrumb";
import ListingHeader from "@/components/shared/utilities/ListingHeader";
import { Listable } from "@/types";
import type { ReactNode } from "react";

type SortKey = "asc" | "desc";

interface ListingPageProps<T extends Listable> {
  title: string;
  breadcrumbs: BreadcrumbLink[];
  years: number[];
  groupedPosts: Map<number, T[]>;
  isAscending: boolean;
  isEmpty: boolean;
  emptyState?: ReactNode;
}

const ListingPage = <T extends Listable>({
  title,
  breadcrumbs,
  years,
  groupedPosts,
  isAscending,
  isEmpty,
  emptyState,
}: ListingPageProps<T>) => {
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
          const posts = groupedPosts.get(year);
          if (!posts || posts.length === 0) return null;

          return (
            <section key={year} className="relative">
              <h3 className="mt-2 pl-2 text-xl font-bold dark:text-zinc-400">
                {year}
              </h3>

              <PostGrid posts={posts} sortKey={sortKey} />
            </section>
          );
        })
      )}
    </div>
  );
};

export default ListingPage;
