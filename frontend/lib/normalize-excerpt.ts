// lib/normalize-excerpt.ts

import { ExcerptPost, ListablePost } from "@/types";

export function normalizeExcerptPost(excerpt: ExcerptPost): ListablePost {
  return {
    slug: excerpt.slug,
    title: excerpt.title,
    excerpt: excerpt.excerpt,
    publishedAt: excerpt.publishedAt,
    tags: excerpt.tags,
    category: excerpt.category,
    image: excerpt.image,
    alt: excerpt.alt,
    kind: "excerpt",
  };
}
