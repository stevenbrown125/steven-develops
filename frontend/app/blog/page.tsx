// File: /app/blog/page.tsx

import type { Metadata } from "next";

import { groupPostsByYears, sortPostYears } from "@/lib/postHelpers";
import { Page } from "@/types";
import ListingPage from "@/components/features/Blog/ListingPage";
import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { BreadcrumbLink } from "@/components/shared/utilities/Breadcrumb";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(seoContent.blog).metadata;

export default async function BlogPage({ searchParams }: Page) {
  const posts = await getAllListablePosts();

  const resolvedSearchParams = await searchParams;
  const isAscending = resolvedSearchParams?.sort === "asc";

  const groupedPosts = groupPostsByYears(posts, isAscending);
  const years = sortPostYears(groupedPosts, isAscending);

  const breadcrumbs: BreadcrumbLink[] = [{ href: "/blog", title: "Blog" }];

  return (
    <ListingPage
      title="All Posts"
      breadcrumbs={breadcrumbs}
      years={years}
      groupedPosts={groupedPosts}
      isAscending={isAscending}
      isEmpty={groupedPosts.size === 0}
    />
  );
}
