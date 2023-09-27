import clientFetch from "@/client";
import { groq } from "next-sanity";
import { Post } from "../types/Post";

const getAllPosts = async (): Promise<Post[]> => {
  const query = groq`*[_type=="post"]{
        title,
        author,
        category,
        image,
        body,
        "slug": slug.current  
      }`;

  const data = await clientFetch(query);
  return data;
};

const getPostBySlug = async (slug: string): Promise<Post> => {
  const query = groq`*[_type == "post" && slug.current == '${slug}']{
        title,
        author,
        category,
        image,
        body,
        "slug": slug.current  
    }`;

  const data = await clientFetch(query);
  return data[0];
};

export { getAllPosts, getPostBySlug };
