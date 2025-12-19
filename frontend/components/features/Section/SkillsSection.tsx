// components/features/Section/SkillsSection.tsx

"use client";

import TagChipset from "@/components/shared/TagChipset";
import type { TagIndex } from "@/lib/tag-index";
import type { Project } from "@/types";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  title?: string;
  technologies?: TagIndex<Project>[];
  children?: ReactNode;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "My Skills",
  technologies,
  children,
}) => {
  const tags = technologies?.length
    ? technologies
        .filter((tech) => tech.items.length > 0)
        .sort((a, b) => b.items.length - a.items.length)
        .map((tech) => ({
          title: tech.tag,
          href: `/portfolio/technologies/${tech.slug}`,
        }))
    : null;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        },
      }}
      className="relative z-10 pb-8 overflow-hidden border-t shadow-inner border-zinc-500/30 dark:bg-zinc-800 bg-zinc-100 isolate h-fit"
    >
      <header className="flex px-8 mx-auto max-w-7xl">
        <h2 className="px-12 pt-4 mb-4 leading-10 heading-hr">{title}</h2>
      </header>

      <div className="px-12 mx-auto max-w-7xl">
        {children ?? (tags && <TagChipset tags={tags} />)}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
