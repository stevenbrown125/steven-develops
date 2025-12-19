// File: app/blog/tags/[slug]/page.tsx

import type { Metadata } from "next";
import ListingPage from "@/components/features/Blog/ListingPage";
import { getAllBlogTags } from "@/lib/mdx-utils";
import { generateSEO, seoContent } from "@/lib/seo";

type RouteParams = {
  slug: string;
};

export const dynamic = "force-static";

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
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const tags = await getAllBlogTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    // keep your previous behaviour; swap to notFound() if you prefer a 404
    return null;
  }

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
      posts={tag.items}
      emptyState={
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts are currently tagged with <strong>{tag.tag}</strong>.
        </p>
      }
    />
  );
}
