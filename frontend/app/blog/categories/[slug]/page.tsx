// File: app/blog/categories/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { getCategoryBySlug } from "@/lib/category-utils";
import ListingPage from "@/components/features/Blog/ListingPage";
import { generateSEO, seoContent } from "@/lib/seo";
import {
  buildCategoryIndex,
  formatCategoryTitle,
} from "@/lib/buildCategoryIndex";

type Params = { slug: string };

export const dynamic = "force-static";

// ✅ tell Next which category slugs to pre-generate
export async function generateStaticParams() {
  const items = await getAllListablePosts();
  const categories = buildCategoryIndex(items); // whatever your index shape is

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

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
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const items = await getAllListablePosts();
  const category = getCategoryBySlug(slug, items);

  if (!category) return notFound();

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
      posts={category.posts}
      emptyState={
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts have been published in <strong>{category.title}</strong> yet.
        </p>
      }
    />
  );
}
