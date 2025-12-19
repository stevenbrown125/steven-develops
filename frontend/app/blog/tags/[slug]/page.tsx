// File: /app/blog/tags/[slug]/page.tsx

import type { Metadata } from "next";
import ListingPage from "@/components/features/Blog/ListingPage";
import { groupPostsByYears, sortPostYears } from "@/lib/postHelpers";
import { getAllBlogTags } from "@/lib/mdx-utils";
import { generateSEO, seoContent } from "@/lib/seo";

type RouteParams = {
  slug: string;
};

type SearchParams = {
  sort?: "asc" | "desc";
};

export async function generateStaticParams() {
  const tags = await getAllBlogTags();
  return tags.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  const tags = await getAllBlogTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) return {};

  return generateSEO(
    seoContent.blogTag.build({
      tag: tag.tag,
      slug: tag.slug,
    })
  ).metadata;
}

export default async function BlogTagPage({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams?: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  const tags = await getAllBlogTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    return null;
  }

  const isAscending = resolvedSearchParams?.sort === "asc";

  const groupedPosts = groupPostsByYears(tag.items, isAscending);
  const years = sortPostYears(groupedPosts, isAscending);

  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/tags", title: "Tags" },
    {
      href: `/blog/tags/${tag.slug}`,
      title: tag.tag,
    },
  ];

  return (
    <ListingPage
      title={`All ${tag.tag} Posts`}
      breadcrumbs={breadcrumbs}
      years={years}
      groupedPosts={groupedPosts}
      isAscending={isAscending}
      isEmpty={groupedPosts.size === 0}
      emptyState={
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts are currently tagged with <strong>{tag.tag}</strong>.
        </p>
      }
    />
  );
}
