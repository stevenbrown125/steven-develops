import { PortableTextBlock } from "@portabletext/types";

export interface Post {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  image: string;
  alt: string;
  category: string[];
  publishedAt: string;
  body: PortableTextBlock;
}
