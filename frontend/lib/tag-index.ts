// lib/tag-index.ts

import { slugify } from "@/lib/utils";
import { Project, Taggable } from "@/types";

export type TagIndex<T> = {
  tag: string;
  slug: string;
  items: T[];
};

/* -------------------------------- blog tags -------------------------------- */

export function buildBlogTagIndex<T extends Taggable>(
  items: T[],
  knownTags: string[] = []
): TagIndex<T>[] {
  const map = new Map<string, TagIndex<T>>();

  // seed known tags (optional)
  for (const tag of knownTags) {
    const slug = slugify(tag);
    map.set(slug, { tag, slug, items: [] });
  }

  // populate from timeline items (blog posts + excerpts)
  for (const item of items) {
    for (const tag of item.tags ?? []) {
      const slug = slugify(tag);

      if (!map.has(slug)) {
        map.set(slug, { tag, slug, items: [] });
      }

      map.get(slug)!.items.push(item);
    }
  }

  return Array.from(map.values());
}
/* ---------------------------- project technologies --------------------------- */

export function buildProjectTechnologyIndex(
  projects: Project[],
  knownTechnologies: string[] = []
): TagIndex<Project>[] {
  const map = new Map<string, TagIndex<Project>>();

  // seed known technologies (optional but important)
  for (const tech of knownTechnologies) {
    const slug = slugify(tech);
    map.set(slug, { tag: tech, slug, items: [] });
  }

  // populate from projects
  for (const project of projects) {
    for (const tech of project.technologies ?? []) {
      const slug = slugify(tech);

      if (!map.has(slug)) {
        map.set(slug, { tag: tech, slug, items: [] });
      }

      map.get(slug)!.items.push(project);
    }
  }

  return Array.from(map.values());
}
