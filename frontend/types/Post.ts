// types/post.ts

import { Chronological } from "./Chronological";

export interface BlogCardItem extends Chronological {
  slug: string;
  title: string;
  excerpt?: string;
  image: string;
  alt: string;
  kind?: "blog" | "excerpt";
}

export type PostMetadata = {
  title: string;
  excerpt: string;
  author: string;
  image: string;
  alt: string;
  category: string;
  tags: string[];
  publishedAt: string; // ISO string
};

// This is what your app actually works with (includes the route slug)
export type Post = PostMetadata & {
  slug: string;
};

export interface PostProps {
  post: Post;
}
