import { PortableTextBlock } from "@portabletext/types";

export interface Post {
  title: string;
  slug: string;
  author: string;
  image: any;
  category: string[];
  publishedAt: string;
  body: PortableTextBlock;
}
