// lib/category-utils.ts

import { ListablePost } from "@/types";

export function buildCategoryIndex(posts: ListablePost[]): CategoryWithPosts[] {
  const map = new Map<string, CategoryWithPosts>();

  for (const post of posts) {
    const slug = post.category;
    if (!slug) continue;

    if (!map.has(slug)) {
      map.set(slug, {
        slug,
        title: slug.replace(/-/g, " "),
        posts: [],
      });
    }

    map.get(slug)!.posts.push(post);
  }

  return Array.from(map.values()).sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

export type CategoryWithPosts = {
  title: string;
  slug: string;
  description?: string;
  posts: ListablePost[];
};

export function getCategoryBySlug(
  slug: string,
  posts: ListablePost[]
): CategoryWithPosts | null {
  const filtered = posts.filter((post) => post.category === slug);

  if (filtered.length === 0) return null;

  return {
    slug,
    title: slug.replace(/-/g, " "),
    posts: filtered,
  };
}
