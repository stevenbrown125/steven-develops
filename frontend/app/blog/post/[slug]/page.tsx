// File: /app/blog/post/[slug]/page.tsx

import type { Metadata } from "next";

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import PostLayout from "@/components/features/Blog/PostLayout";
import PostNavigation from "@/components/features/Blog/PostNavigation";
import { getAllBlogPostsData, getAllExcerptData } from "@/lib/mdx-utils";
import { generateSEO, seoContent } from "@/lib/seo";
import ExcerptLayout from "@/components/features/Blog/ExcerptLayout";
import { resolveBlogSlug } from "@/lib/resolveBlogSlug";
import { notFound } from "next/navigation";
import { getBlogTimeline } from "@/lib/blogTimeline";
import { getAdjacentTimelineItems } from "@/lib/blogNavigation";

type RouteParams = {
  slug: string;
};

export async function generateStaticParams() {
  const [posts, excerpts] = await Promise.all([
    getAllBlogPostsData(),
    getAllExcerptData(),
  ]);

  return [...posts, ...excerpts].map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveBlogSlug(slug);

  if (!resolved) {
    notFound();
  }
  if (resolved.type === "blog") {
    const post = resolved.post;

    return generateSEO(
      seoContent.blogPost.build({
        title: post.title,
        slug,
        excerpt: post.excerpt,
        image: post.image,
        publishedAt: post.publishedAt,
        tags: post.tags,
      })
    ).metadata;
  }

  const excerpt = resolved.post;

  return {
    title: excerpt.title,
    description: excerpt.excerpt,
    alternates: {
      canonical: excerpt.canonical.url,
    },
    openGraph: {
      title: excerpt.title,
      description: excerpt.excerpt,
      images: excerpt.image,
      type: "article",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const resolved = await resolveBlogSlug(slug);

  if (!resolved) {
    notFound();
  }
  if (resolved.type === "blog") {
    const post = resolved.post;
    const timeline = await getBlogTimeline();
    const { prev, next } = getAdjacentTimelineItems(timeline, slug);
    const MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default;

    return (
      <div className="relative mx-auto flex-grow max-w-7xl px-4 py-4 lg:px-8">
        <Breadcrumbs
          breadcrumbs={[
            { href: "/blog", title: "Blog" },
            { href: `/blog/${slug}`, title: post.title },
          ]}
        />

        <PostLayout post={post}>
          <MDXContent />
        </PostLayout>

        <PostNavigation prev={prev} next={next} />
      </div>
    );
  }

  // excerpt
  const excerpt = resolved.post;
  const MDXContent = (await import(`@/content/excerpts/${slug}.mdx`)).default;
  const timeline = await getBlogTimeline();
  const { prev, next } = getAdjacentTimelineItems(timeline, slug);

  return (
    <div className="relative mx-auto flex-grow max-w-7xl px-4 py-4 lg:px-8">
      <Breadcrumbs
        breadcrumbs={[
          { href: "/blog", title: "Blog" },
          { href: `/blog/${slug}`, title: excerpt.title },
        ]}
      />

      <ExcerptLayout post={excerpt}>
        <MDXContent />
      </ExcerptLayout>
      <PostNavigation prev={prev} next={next} />
    </div>
  );
}
