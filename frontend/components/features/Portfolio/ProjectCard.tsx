// components/features/Portfolio/ProjectCard.tsx

"use client";

import { motion, type Variants } from "motion/react";
import { ProjectProps } from "@/types";
import {
  Card,
  CardBody,
  CardHeader,
  CardLink,
} from "@/components/core/Card/Card";
import Figure from "@/components/core/Figure/Figure";
import { formatDate } from "@/lib/formatDate";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const { title, description, slug, image, startDate } = project;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <CardLink
        href={`/portfolio/project/${slug}`}
        schemaProps={{ itemProp: "url" }}
      >
        <Card
          schemaProps={{
            itemScope: true,
            itemType: "https://schema.org/CreativeWork",
            itemProp: "itemListElement",
          }}
        >
          <CardHeader>
            <div className="overflow-hidden rounded-t-md">
              <Figure
                figure={{ href: image, alt: title, classes: "listing" }}
              />
            </div>

            <h3
              itemProp="headline"
              className="mx-4 mt-3 text-center text-lg font-semibold heading-hr transition-colors group-hover:text-primary"
            >
              {title}
            </h3>

            <p className="mt-1 px-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
              Started on{" "}
              <time dateTime={startDate} itemProp="dateCreated">
                {formatDate(startDate)}
              </time>
            </p>
          </CardHeader>

          <CardBody>
            <p
              itemProp="description"
              className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              {description}
            </p>

            <span className="mt-3 inline-block text-sm italic text-primary border-b border-dotted border-primary/50 transition-colors group-hover:text-primary-dark">
              Read more →
            </span>
          </CardBody>
        </Card>
      </CardLink>
    </motion.div>
  );
};

export default ProjectCard;
