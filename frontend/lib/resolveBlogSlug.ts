// lib/resolveBlogSlug.ts

import {
  getBlogPostMetadata,
  getBlogSlugs,
  getExcerptMetadata,
  getExcerptSlugs,
} from "@/lib/mdx-utils";

export async function resolveBlogSlug(slug: string) {
  const [blogSlugs, excerptSlugs] = await Promise.all([
    getBlogSlugs(),
    getExcerptSlugs(),
  ]);

  if (blogSlugs.has(slug)) {
    return {
      type: "blog" as const,
      post: await getBlogPostMetadata(slug),
    };
  }

  if (excerptSlugs.has(slug)) {
    return {
      type: "excerpt" as const,
      post: await getExcerptMetadata(slug),
    };
  }

  return null;
}
