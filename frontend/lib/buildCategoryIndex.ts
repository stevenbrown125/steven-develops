// lib/category-utils.ts

import { ListablePost } from "@/types";
export function formatCategoryTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
export type CategoryWithPosts = {
  title: string;
  slug: string;
  posts: ListablePost[];
};

export function buildCategoryIndex(posts: ListablePost[]): CategoryWithPosts[] {
  const map = new Map<string, CategoryWithPosts>();

  for (const post of posts) {
    const slug = post.category;
    if (!slug) continue;

    if (!map.has(slug)) {
      map.set(slug, {
        slug,
        title: formatCategoryTitle(slug),
        posts: [],
      });
    }

    map.get(slug)!.posts.push(post);
  }

  return Array.from(map.values()).sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

export function getCategoryBySlug(
  slug: string,
  posts: ListablePost[]
): CategoryWithPosts | null {
  const categoryPosts = posts.filter((post) => post.category === slug);

  if (categoryPosts.length === 0) return null;

  return {
    slug,
    title: formatCategoryTitle(slug),
    posts: categoryPosts,
  };
}
