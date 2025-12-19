// File: app/blog/page.tsx

import type { Metadata } from "next";

import ListingPage from "@/components/features/Blog/ListingPage";
import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { BreadcrumbLink } from "@/components/shared/utilities/Breadcrumb";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(seoContent.blog).metadata;
export const dynamic = "force-static";

export default async function BlogPage() {
  const posts = await getAllListablePosts();

  const breadcrumbs: BreadcrumbLink[] = [{ href: "/blog", title: "Blog" }];

  return (
    <ListingPage title="All Posts" breadcrumbs={breadcrumbs} posts={posts} />
  );
}
