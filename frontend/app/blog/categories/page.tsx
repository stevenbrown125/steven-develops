// File: /app/blog/categories/page.tsx

import type { Metadata } from "next";

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import PageGrid from "@/components/shared/layout/PageGrid";
import CategoryCard from "@/components/features/Blog/CategoryCard";
import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { buildCategoryIndex } from "@/lib/buildCategoryIndex";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(
  seoContent.blogCategories
).metadata;

export default async function AllCategoryPage() {
  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/categories", title: "Categories" },
  ];

  const items = await getAllListablePosts();
  const categories = buildCategoryIndex(items);

  return (
    <div className="relative flex-grow px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <PageGrid title="All Categories">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={{
              slug: category.slug,
              title: category.title,
              count: category.posts.length,
            }}
          />
        ))}
      </PageGrid>
    </div>
  );
}
