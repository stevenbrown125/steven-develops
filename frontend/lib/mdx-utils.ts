/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { readdir } from "fs/promises";
import type { Dirent } from "fs";
import { ExcerptPost, Post, Project } from "@/types";
import { buildBlogTagIndex, buildProjectTechnologyIndex } from "./tag-index";
import { getBlogTimeline } from "./blogTimeline";

const slugFrom = (d: Dirent) => d.name.replace(/\.mdx$/, "");

const isMDXFile = (dirent: Dirent) =>
  !dirent.isDirectory() && dirent.name.endsWith(".mdx");

const getSlugFromFilename = (dirent: Dirent) =>
  dirent.name.substring(0, dirent.name.lastIndexOf("."));

export async function getBlogSlugs(): Promise<Set<string>> {
  const dirents = await readdir("./content/blog", { withFileTypes: true });
  return new Set(dirents.filter(isMDXFile).map(slugFrom));
}

export async function getExcerptSlugs(): Promise<Set<string>> {
  const dirents = await readdir("./content/excerpts", { withFileTypes: true });
  return new Set(dirents.filter(isMDXFile).map(slugFrom));
}

export async function getBlogPostMetadata(slug: string): Promise<Post> {
  try {
    const file = await import(`@/content/blog/${slug}.mdx`);

    if (!file?.metadata) {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }

    const meta = file.metadata;

    // Validate required fields
    if (!meta.title || !meta.publishedAt) {
      throw new Error(
        `Missing required metadata fields in: ${slug}.mdx (title or publishedAt)`
      );
    }

    return {
      slug,
      ...meta, // spread all metadata fields directly
      tableOfContents: file.tableOfContents ?? null,
    };
  } catch (error: any) {
    console.error(error?.message);
    return notFound();
  }
}

export async function getAllBlogPostsData(): Promise<Post[]> {
  try {
    const dirents = await readdir("./content/blog/", { withFileTypes: true });
    const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename);

    const posts = await Promise.all(
      slugs.map((slug) => getBlogPostMetadata(slug))
    );

    // Sort newest → oldest by publishedAt
    posts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProjectMetadata(slug: string): Promise<Project> {
  try {
    const file = await import(`@/content/projects/${slug}.mdx`);

    if (!file?.metadata) {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }

    const meta = file.metadata;

    // Validate required fields
    if (!meta.title || !meta.startDate) {
      throw new Error(
        `Missing required metadata fields in: ${slug}.mdx (title or publishedAt)`
      );
    }

    return {
      slug,
      ...meta, // spread all metadata fields directly
      tableOfContents: file.tableOfContents ?? null,
    };
  } catch (error: any) {
    console.error(error?.message);
    return notFound();
  }
}

export async function getAllProjectData(): Promise<Project[]> {
  try {
    const dirents = await readdir("./content/projects/", {
      withFileTypes: true,
    });
    const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename);

    const projects = await Promise.all(
      slugs.map((slug) => getProjectMetadata(slug))
    );

    // Sort newest → oldest by publishedAt
    projects.sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );

    return projects;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/* ----------------------------- blog tag pages ----------------------------- */

export async function getAllBlogTags() {
  const timeline = await getBlogTimeline();
  return buildBlogTagIndex(timeline);
}

export async function getBlogPostsByTag(tagSlug: string) {
  const tags = await getAllBlogTags();
  const match = tags.find((t) => t.slug === tagSlug);
  return match ?? null;
}

/* -------------------------- project technology pages -------------------------- */

export async function getAllProjectTechnologies() {
  const projects = await getAllProjectData();
  return buildProjectTechnologyIndex(projects);
}

export async function getProjectsByTechnology(techSlug: string) {
  const techs = await getAllProjectTechnologies();
  const match = techs.find((t) => t.slug === techSlug);
  return match ?? null;
}

export async function getExcerptMetadata(slug: string): Promise<ExcerptPost> {
  try {
    const file = await import(`@/content/excerpts/${slug}.mdx`);

    if (!file?.metadata) {
      throw new Error(`Missing metadata in excerpt: ${slug}.mdx`);
    }

    const meta = file.metadata;

    // Hard requirements (SEO safety)
    if (
      !meta.title ||
      !meta.excerpt ||
      !meta.publishedAt ||
      !meta.canonical?.url
    ) {
      throw new Error(
        `Excerpt ${slug}.mdx missing required fields (title, excerpt, publishedAt, canonical.url)`
      );
    }

    return {
      slug,
      ...meta,
      isExcerpt: true,
    };
  } catch (error: any) {
    console.error(error?.message);
    return notFound();
  }
}

export async function getAllExcerptData(): Promise<ExcerptPost[]> {
  try {
    const dirents = await readdir("./content/excerpts/", {
      withFileTypes: true,
    });

    const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename);

    const excerpts = await Promise.all(
      slugs.map((slug) => getExcerptMetadata(slug))
    );

    excerpts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return excerpts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
