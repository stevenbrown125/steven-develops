import clientFetch from "@/client";
import { groq } from "next-sanity";
import { Post, SiteData, Category, Tag, Project, Technology } from "@/types";

const postFields = `
  title,
  "image": mainImage -> image.asset -> url,
  "alt": mainImage -> title,
  excerpt,
  body,
  publishedAt,
  "category": category->{title, "slug": slug.current},
  "tags": tags[]->{title, "slug": slug.current},
  "slug": slug.current
`;

const projectFields = `
  title,
  "slug": slug.current,
  "image": {
    "href": image->image.asset->url,
    "dimensions": image->image.asset->metadata.dimensions,
    "alt": image->title
  },
  description,
  body,
  startDate,
  completionDate,
  "category": category->{title, "slug": slug.current},
  "technologies": technologies[]->{title, "slug": slug.current},
  "liveURL": liveURL.current
`;

const technologyAndTagFields = `
title,
"slug": slug.current,
icon,
`
const buildQuery = (type: string, slug: string, fields: string) => {
  const slugFilter = slug ? `&& slug.current == '${slug}'` : '';
  return groq`*[_type == "${type}" ${slugFilter}]{${fields}}`;
};

// SiteData
const getSiteData = async (): Promise<SiteData> => {
  const query = buildQuery("site", '', `title, description, "logo": logo.asset->url`);
  const results = await clientFetch<SiteData[]>(query);
  return results[0];
};

// Posts
const getAllPosts = async (): Promise<Post[]> => {
  const query = buildQuery("post", '', postFields);
  return await clientFetch<Post[]>(query);
};

const getPostBySlug = async (slug: string): Promise<Post> => {
  const query = buildQuery("post", slug, postFields);
  const results = await clientFetch<Post[]>(query);
  return results[0];
};

const getPostsByCategory = async (slug: string): Promise<Post[]> => {
  const query = groq`*[_type == "post" && category->slug.current == '${slug}']{${postFields}}`;
  return await clientFetch<Post[]>(query);
};

// Projects
const getAllProjects = async (): Promise<Project[]> => {
  const query = buildQuery("project", '', projectFields);
  return await clientFetch<Project[]>(query);
};

const getProjectBySlug = async (slug: string): Promise<Project> => {
  const query = buildQuery("project", slug, projectFields);
  const results = await clientFetch<Project[]>(query);
  return results[0];
};

const getProjectsByTechnology = async (slug: string): Promise<Project[]> => {
  const query = groq`*[_type == "project" && '${slug}' in technologies[]->slug.current]{${projectFields}}`;
  return await clientFetch<Project[]>(query);
};

// Technologies
const getAllTechnologies = async (): Promise<Technology[]> => {
  const query = buildQuery("technology", '', technologyAndTagFields);
  return await clientFetch<Technology[]>(query);
};

const getTechnologyBySlug = async (slug: string): Promise<Technology> => {
  const query = buildQuery("technology", slug, 'title, "slug": slug.current');
  const results = await clientFetch<Technology[]>(query);
  return results[0];
};

// Tags
const getAllTags = async (): Promise<Tag[]> => {
  const query = buildQuery("tag", '', technologyAndTagFields);
  return await clientFetch<Tag[]>(query);
};

const getTagBySlug = async (slug: string): Promise<Tag> => {
  const query = buildQuery("tag", slug, 'title, "slug": slug.current');
  const results = await clientFetch<Tag[]>(query);
  return results[0];
};

const getPostsByTag = async (slug: string): Promise<Post[]> => {
  const query = groq`*[_type == "post" && '${slug}' in tags[]->slug.current]{${postFields}}`;
  return await clientFetch<Post[]>(query);
};

// Categories
const getAllCategories = async (): Promise<Category[]> => {
  const query = buildQuery("category", '', 'title, "slug": slug.current, description,  "image": image -> image.asset -> url, "alt": image -> title');
  return await clientFetch<Category[]>(query);
};

const getCategoryBySlug = async (slug: string): Promise<Category> => {
  const query = buildQuery("category", slug, 'title, "slug": slug.current, description');
  const results = await clientFetch<Category[]>(query);
  return results[0];
};


export {
  getSiteData,
  getAllPosts,
  getAllProjects,
  getPostBySlug,
  getProjectBySlug,
  getAllTechnologies,
  getTechnologyBySlug,
  getAllCategories,
  getCategoryBySlug,
  getProjectsByTechnology,
  getAllTags,
  getTagBySlug,
  getPostsByCategory,
  getPostsByTag,
};
