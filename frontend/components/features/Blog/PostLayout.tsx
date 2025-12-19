// components/features/Blog/PostLayout.tsx

"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PostProps } from "@/types/Post";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

type Props = {
  post: PostProps["post"];
  children: ReactNode;
};

const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PostLayout({ post, children }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      itemScope
      itemType="https://schema.org/BlogPosting"
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.4, ease: EASE_EDITORIAL }
      }
    >
      <PostHeader
        title={post.title}
        image={post.image}
        alt={post.alt}
        publishedAt={post.publishedAt}
        category={post.category}
        tags={post.tags}
      />

      <section
        itemProp="articleBody"
        className="prose dark:prose-invert max-w-none leading-relaxed prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary-dark mt-8 mx-4"
      >
        {children}
      </section>

      <PostFooter slug={post.slug} title={post.title} />
    </motion.article>
  );
}
