// File: components/features/Portfolio/ProjectGridClient.tsx
"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProjectGrid from "./ProjectGrid";
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
    const sorted = [...initialProjects];
    sorted.sort((a, b) => {
      const aDate = new Date(a.startDate).getTime();
      const bDate = new Date(b.startDate).getTime();
      return isAscending ? aDate - bDate : bDate - aDate;
    });
    return sorted;
  }, [initialProjects, isAscending]);

  return (
    <ProjectGrid title={title} projects={projects} isAscending={isAscending} />
  );
}
