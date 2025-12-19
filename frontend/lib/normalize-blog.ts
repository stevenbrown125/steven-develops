// lib/normalize-blog.ts

import { ListablePost, Post } from "@/types";

export function normalizeBlogPost(post: Post): ListablePost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    tags: post.tags,
    category: post.category,
    image: post.image,
    alt: post.alt,
    kind: "blog",
  };
}
