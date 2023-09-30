import clientFetch from "@/client";
import { groq } from "next-sanity";
import { Post } from "../types/Post";
import { Metadata } from "../types/Metadata";
import { SiteData } from "../types/SiteData";
import { da } from "date-fns/locale";

const getSiteMetaData = async (): Promise<Metadata> => {
  const query = groq`*[_type=="site"]{
          title,
          description,
        }[0]`;

  const data = await clientFetch(query);
  return data;
};

const getSiteData = async (): Promise<SiteData> => {
  const query = groq`*[_type=="site"]{
            title,
            description,
            "logo": logo.asset->url
          }[0]`;

  const data = await clientFetch(query);
  return data;
};

const getAllPosts = async (): Promise<Post[]> => {
  const query = groq`*[_type=="post"]{
        title,
        "image":mainImage -> image.asset -> url,
        "alt": mainImage -> title,
        excerpt,
        publishedAt,
        "slug": slug.current  
      }`;

  const data = await clientFetch(query);
  return data;
};

const getPostBySlug = async (slug: string): Promise<Post> => {
  const query = groq`*[_type == "post" && slug.current == '${slug}']{
        title,
        category,             
        "image":mainImage -> image.asset -> url,
        "alt": mainImage -> title,
        body,
        publishedAt,
        "slug": slug.current  
    }[0]`;
  const data = await clientFetch(query);
  return data;
};

export { getSiteMetaData, getSiteData, getAllPosts, getPostBySlug };
