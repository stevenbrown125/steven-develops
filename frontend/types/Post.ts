import { PortableTextBlock } from "@portabletext/types";
import { Tag } from "./Tag";
import { Category } from "./Category";

export interface Post {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  image: string;
  alt: string;
  category: Category;
  tags: Tag[];
  publishedAt: string;
  body: PortableTextBlock;
}

export interface PostProps {
  post: Post
}