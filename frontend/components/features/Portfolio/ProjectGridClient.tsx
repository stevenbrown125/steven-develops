// File: app/portfolio/ProjectGridClient.tsx
"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProjectGrid from "@/components/features/Portfolio/ProjectGrid";
import type { Project } from "@/types";

type ProjectGridClientProps = {
  title: string;
  initialProjects: Project[];
};

export default function ProjectGridClient({
  title,
  initialProjects,
}: ProjectGridClientProps) {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const isAscending = sortParam === "asc";

  const projects = useMemo(() => {
    const copy = [...initialProjects];
    copy.sort((a, b) => {
      const aDate = new Date(a.startDate).getTime();
      const bDate = new Date(b.startDate).getTime();
      return isAscending ? aDate - bDate : bDate - aDate;
    });
    return copy;
  }, [initialProjects, isAscending]);

  return (
    <ProjectGrid title={title} projects={projects} isAscending={isAscending} />
  );
}
