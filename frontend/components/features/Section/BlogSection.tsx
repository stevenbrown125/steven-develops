// components/features/Section/BlogSection.tsx

"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { ListablePost } from "@/types";
import { motion, useReducedMotion } from "motion/react";
import PostGrid from "@/components/features/Blog/PostGrid";

interface BlogSectionProps {
  posts: ListablePost[];
}

const EASE_STANDARD: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-30 pb-8 shadow-lg dark:bg-zinc-800">
      <header className="flex px-4 mx-auto xl:px-8 max-w-7xl">
        <h2 className="px-12 mb-4 leading-10 heading-hr">My Blog</h2>
      </header>

      {/* Grid owns layout + animation */}
      <div className="sm:px-4 xl:px-16">
        <PostGrid posts={posts} sortKey="desc" />
      </div>

      <motion.div
        className="flex justify-center pb-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.3,
          delay: prefersReducedMotion ? 0 : 0.2,
        }}
      >
        <Link
          href="/blog"
          className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide rounded-md shadow-xl gap-x-1 bg-primary hover:opacity-90 text-zinc-50"
        >
          View All Posts
          <motion.span
            initial={{ x: 0 }}
            whileInView={{ x: prefersReducedMotion ? 0 : [0, 4, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_STANDARD }}
          >
            <FaArrowRight className="mt-0.5" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default BlogSection;
