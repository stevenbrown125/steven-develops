// File: /app/blog/categories/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { getCategoryBySlug } from "@/lib/category-utils";
import { groupPostsByYears, sortPostYears } from "@/lib/postHelpers";
import ListingPage from "@/components/features/Blog/ListingPage";
import { generateSEO, seoContent } from "@/lib/seo";
import { formatCategoryTitle } from "@/lib/buildCategoryIndex";

type Params = { slug: string };
type SearchParams = { sort?: "asc" | "desc" };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const items = await getAllListablePosts();
  const category = getCategoryBySlug(slug, items);

  if (!category) return {};

  return generateSEO(
    seoContent.blogCategory.build({
      title: formatCategoryTitle(category.slug),
      slug: category.slug,
      description: category.description,
    })
  ).metadata;
}

export default async function BlogCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  const isAscending = resolvedSearchParams?.sort === "asc";

  const items = await getAllListablePosts();
  const category = getCategoryBySlug(slug, items);

  if (!category) return notFound();

  const groupedPosts = groupPostsByYears(category.posts, isAscending);
  const years = sortPostYears(groupedPosts, isAscending);

  return (
    <ListingPage
      title={`All ${category.title} Posts`}
      breadcrumbs={[
        { href: "/blog", title: "Blog" },
        { href: "/blog/categories", title: "Categories" },
        {
          href: `/blog/categories/${category.slug}`,
          title: category.title,
        },
      ]}
      years={years}
      groupedPosts={groupedPosts}
      isAscending={isAscending}
      isEmpty={groupedPosts.size === 0}
      emptyState={
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts have been published in <strong>{category.title}</strong> yet.
        </p>
      }
    />
  );
}
