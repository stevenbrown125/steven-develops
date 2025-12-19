// components/PostCard.tsx

"use client";

import { motion } from "motion/react";
import {
  Card,
  CardBody,
  CardHeader,
  CardLink,
} from "@/components/core/Card/Card";
import Figure from "@/components/core/Figure/Figure";
import { formatDate } from "@/lib/formatDate";
import { BlogCardItem } from "@/types";

interface PostCardProps {
  post: BlogCardItem;
  index: number;
}

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PostCard = ({ post, index }: PostCardProps) => {
  const { title, excerpt, image, alt, publishedAt, slug } = post;
  console.log(image);
  return (
    <CardLink href={`/blog/post/${slug}`} schemaProps={{ itemProp: "url" }}>
      <motion.div
        className="group h-full"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.45,
          ease: EASE_OUT,
          delay: index * 0.08,
        }}
      >
        <Card
          schemaProps={{
            itemProp: "itemListElement",
            itemScope: true,
            itemType: "https://schema.org/Article",
          }}
        >
          <CardHeader>
            <div className="overflow-hidden rounded-t-md">
              <Figure
                figure={{
                  href: image,
                  alt,
                  classes: "listing",
                }}
              />
            </div>

            <h3
              itemProp="headline"
              className="mx-4 mt-3 text-center text-lg font-semibold heading-hr transition-colors group-hover:text-primary"
            >
              {title}
            </h3>

            <p className="mt-1 px-2 text-xs text-center text-zinc-500 dark:text-zinc-400">
              Published on
              <time dateTime={publishedAt} itemProp="datePublished">
                {formatDate(publishedAt)}
              </time>
            </p>
          </CardHeader>

          <CardBody>
            <p
              itemProp="description"
              className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              {excerpt}
            </p>

            <span className="mt-3 inline-block text-sm italic text-primary border-b border-dotted border-primary/50 transition-colors group-hover:text-primary-dark">
              Read more →
            </span>
          </CardBody>
        </Card>
      </motion.div>
    </CardLink>
  );
};

export default PostCard;
