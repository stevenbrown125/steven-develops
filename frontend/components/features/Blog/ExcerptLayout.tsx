// components/features/Blog/ExcerptLayout.tsx

"use client";

import { motion, useReducedMotion } from "motion/react";
import PostHeader from "./PostHeader";
import type { ReactNode } from "react";
import { ExcerptPost } from "@/types";
import PostFooter from "./PostFooter";

const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Props {
  post: ExcerptPost;
  children: ReactNode;
}

export default function ExcerptLayout({ post, children }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      itemScope
      itemType="https://schema.org/Article"
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

      <section className="prose dark:prose-invert max-w-none leading-relaxed mt-8 mx-4">
        {children}

        <p className="mt-6 text-sm italic">
          I originally published this article on my web development company{" "}
          <a
            href={post.canonical.url}
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            {post.canonical.siteName ?? "the original site"}
          </a>
          .
        </p>
      </section>
    </motion.article>
  );
}
