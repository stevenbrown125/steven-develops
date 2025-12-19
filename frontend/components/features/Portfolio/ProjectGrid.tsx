// components/features/Portfolio/ProjectGrid.tsx

"use client";

import { useMemo } from "react";
import { motion, type Variants } from "motion/react";
import ProjectCard from "@/components/features/Portfolio/ProjectCard";
import { Project } from "@/types";
import ListingHeader from "@/components/shared/utilities/ListingHeader";

type SortKey = "asc" | "desc";

interface ProjectGridProps {
  title: string;
  projects: Project[];
  isAscending: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const ProjectGrid: React.FC<ProjectGridProps> = ({
  title,
  projects,
  isAscending,
}) => {
  const sortKey: SortKey = isAscending ? "asc" : "desc";

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const aTime = new Date(a.startDate).getTime();
      const bTime = new Date(b.startDate).getTime();
      return sortKey === "asc" ? aTime - bTime : bTime - aTime;
    });
  }, [projects, sortKey]);

  return (
    <div className="relative mx-auto flex-grow max-w-screen-2xl">
      <ListingHeader title={title} isAscending={isAscending} />

      <motion.section
        key={sortKey}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        {sortedProjects.length > 0 ? (
          sortedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className="col-span-3 px-2 pt-4">
            Nothing yet! Stay tuned.. perhaps subscribe to my RSS feed?
          </p>
        )}
      </motion.section>
    </div>
  );
};

export default ProjectGrid;
