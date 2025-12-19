// lib/projectNavigation.ts
import { Project } from "@/types";

export function getAdjacentProjects(projects: Project[], currentSlug: string) {
  const index = projects.findIndex((p) => p.slug === currentSlug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: projects[index + 1] ?? null, // older
    next: projects[index - 1] ?? null, // newer
  };
}
