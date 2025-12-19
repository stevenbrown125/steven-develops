// lib/getAllListablePosts.ts

import { getAllBlogPostsData, getAllExcerptData } from "@/lib/mdx-utils";
import { normalizeBlogPost } from "./normalize-blog";
import { ListablePost } from "@/types";
import { normalizeExcerptPost } from "./normalize-excerpt";

export async function getAllListablePosts(): Promise<ListablePost[]> {
  const [blogs, excerpts] = await Promise.all([
    getAllBlogPostsData(),
    getAllExcerptData(),
  ]);

  const normalized: ListablePost[] = [
    ...blogs.map(normalizeBlogPost),
    ...excerpts.map(normalizeExcerptPost),
  ];

  normalized.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return normalized;
}
