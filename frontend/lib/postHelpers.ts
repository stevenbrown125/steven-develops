// lib/postHelpers.ts

import { Chronological } from "@/types";

export const groupPostsByYears = <T extends Chronological>(
  posts: T[],
  isAscending: boolean
): Map<number, T[]> => {
  const map = new Map<number, T[]>();

  for (const post of posts) {
    const year = new Date(post.publishedAt).getFullYear();

    if (!map.has(year)) {
      map.set(year, []);
    }

    map.get(year)!.push(post);
  }

  // Sort posts within each year
  for (const yearPosts of map.values()) {
    yearPosts.sort((a, b) => {
      const aTime = new Date(a.publishedAt).getTime();
      const bTime = new Date(b.publishedAt).getTime();
      return isAscending ? aTime - bTime : bTime - aTime;
    });
  }

  return map;
};

export const sortPostYears = <T>(
  posts: Map<number, T[]>,
  isAscending: boolean
): number[] => {
  const years = Array.from(posts.keys()).sort((a, b) => a - b);
  return isAscending ? years : years.reverse();
};
