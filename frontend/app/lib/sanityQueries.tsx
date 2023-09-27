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

export { getAllPosts };
