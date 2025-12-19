// components/features/Blog/PostGrid.tsx

"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { Listable } from "@/types";
import PostCard from "./PostCard";

type SortKey = "asc" | "desc";

interface PostGridProps<T extends Listable> {
  posts: T[];
  sortKey: SortKey;
}

const PostGrid = <T extends Listable>({ posts, sortKey }: PostGridProps<T>) => {
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const aTime = new Date(a.publishedAt).getTime();
      const bTime = new Date(b.publishedAt).getTime();
      return sortKey === "asc" ? aTime - bTime : bTime - aTime;
    });
  }, [posts, sortKey]);

  return (
    <motion.div
      key={sortKey}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      {sortedPosts.map((post, index) => (
        <PostCard key={post.slug} post={post} index={index} />
      ))}
    </motion.div>
  );
};

export default PostGrid;
