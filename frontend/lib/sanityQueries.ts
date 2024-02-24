import clientFetch from "@/client";
import { groq } from "next-sanity";
import { Post, SiteData, Category, Tag } from "@/types";
import { Project } from "@/types/Project";
import { Technology } from "@/types/Technology";

const getSiteData = async (): Promise<SiteData> => {
  const query = groq`*[_type == "site"]{
    title,
    description,
    "logo": logo.asset->url
  }[0]`;
  return await clientFetch(query);
};

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
  "slug": slug.current
  "image": image -> image,
  description,
  body,
  startDate,
  completionDate,
  "category": category->{title, "slug": slug.current},
  "technologies": technology[]->{title, "slug": slug.current},
  "liveURL": liveURL.current
`;

const technologyFields = `
title,
"slug": slug.current,
icon,
`

const getAllPosts = async (): Promise<Post[]> => {
  const query = groq`*[_type == "post"]{${postFields}}`;
  return await clientFetch(query);
};

const getAllProjects = async (): Promise<Project[]> => {
  const query = groq`*[_type == "project"]{${projectFields}}`;
  return await clientFetch(query);
};

const getProjectBySlug = async (slug: string): Promise<Project> => {
  const query = groq`*[_type == "project" && slug.current == '${slug}'][0]{${projectFields}}`;
  return await clientFetch(query);
};

const getPostBySlug = async (slug: string): Promise<Post> => {
  const query = groq`*[_type == "post" && slug.current == '${slug}'][0]{${postFields}}`;
  return await clientFetch(query);
};

const getAllTechnologies = async (): Promise<Project[]> => {
  const query = groq`*[_type == "technology"]{${technologyFields}}`;
  return await clientFetch(query);
};

const getAllDocuments = async (type: string): Promise<Category[] | Tag[]> => {
  const query = groq`*[_type == "${type}"]{title, "slug": slug.current, "image": image-> image.asset -> url, "alt": image -> title, description}`;
  return await clientFetch(query);
};

const getDocumentBySlug = async (type: string, slug: string): Promise<Category | Tag> => {
  const query = groq`*[_type == "${type}" && slug.current == '${slug}'][0]{title, "slug": slug.current}`;
  return await clientFetch(query);
};

const getPostsByFilter = async (filterType: string, slug: string): Promise<Post[]> => {
  const filterPath = filterType === 'category' ? 'category->slug.current match' : 'tags[]->slug.current match';
  const query = groq`*[_type == "post" && ${filterPath} '${slug}']{${postFields}}`;
  return await clientFetch(query);
};

const getProjectsByTechnology = async (slug: string): Promise<Project[]> => {
  const filterPath = 'technology->slug.current match';
  const query = groq`*[_type == "project" && ${filterPath} '${slug}']{${projectFields}}`;
  return await clientFetch(query);
};

const getTechnologyBySlug = async (slug: string): Promise<Technology> => {
  const query = groq`*[_type == "technology" && slug.current == '${slug}'][0]{title, "slug": slug.current}`;
  return await clientFetch(query);
};

const getAllCategories = async (): Promise<Category[]> => getAllDocuments("category");

const getCategoryBySlug = async (slug: string): Promise<Category> => getDocumentBySlug("category", slug);

const getAllTags = async (): Promise<Tag[]> => getAllDocuments("tag");

const getTagBySlug = async (slug: string): Promise<Tag> => getDocumentBySlug("tag", slug);

const getPostsByCategory = async (slug: string): Promise<Post[]> => getPostsByFilter("category", slug);

const getPostsByTag = async (slug: string): Promise<Post[]> => getPostsByFilter("tag", slug);

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
