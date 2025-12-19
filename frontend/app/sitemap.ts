// app/sitemap.ts

import { MetadataRoute } from "next";
import config from "@/lib/config";

import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { getAllProjectData } from "@/lib/mdx-utils";
import { buildCategoryIndex } from "@/lib/category-utils";
import { buildBlogTagIndex } from "@/lib/tag-index";

const BASE_URL = config.website;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [items, projects] = await Promise.all([
    getAllListablePosts(), // blog posts + excerpts
    getAllProjectData(),
  ]);

  const categories = buildCategoryIndex(items);
  const tags = buildBlogTagIndex(items);

  const now = new Date();

  return [
    // ------------------------------------------------------------------
    // Main pages
    // ------------------------------------------------------------------
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/categories`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/tags`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      priority: 0.6,
    },

    // ------------------------------------------------------------------
    // Blog posts + excerpts
    // ------------------------------------------------------------------
    ...items.map((item) => ({
      url: `${BASE_URL}/blog/post/${item.slug}`,
      lastModified: new Date(item.publishedAt),
      priority: item.excerpt ? 0.6 : 0.7,
    })),

    // ------------------------------------------------------------------
    // Categories (derived)
    // ------------------------------------------------------------------
    ...categories.map((category) => ({
      url: `${BASE_URL}/blog/categories/${category.slug}`,
      lastModified: now,
      priority: 0.6,
    })),

    // ------------------------------------------------------------------
    // Tags (derived)
    // ------------------------------------------------------------------
    ...tags.map((tag) => ({
      url: `${BASE_URL}/blog/tags/${tag.slug}`,
      lastModified: now,
      priority: 0.5,
    })),

    // ------------------------------------------------------------------
    // Projects
    // ------------------------------------------------------------------
    ...projects.map((project) => ({
      url: `${BASE_URL}/portfolio/projects/${project.slug}`,
      lastModified: new Date(project.completionDate ?? project.startDate),
      priority: 0.7,
    })),
  ];
}
