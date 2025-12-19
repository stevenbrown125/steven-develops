// File: /app/portfolio/page.tsx

import type { Metadata } from "next";

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import ProjectGrid from "@/components/features/Portfolio/ProjectGrid";
import { getAllProjectData } from "@/lib/mdx-utils";
import { Page } from "@/types";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(seoContent.portfolio).metadata;

export default async function PortfolioPage({ searchParams }: Page) {
  const projects = await getAllProjectData();

  console.log("projects", projects);
  const resolvedSearchParams = await searchParams;
  const isAscending = resolvedSearchParams?.sort === "asc";

  const breadcrumbs = [{ href: "/portfolio", title: "Portfolio" }];

  return (
    <div className="relative mx-auto flex-grow max-w-7xl px-4 py-4 lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ProjectGrid
        title="Portfolio"
        projects={projects}
        isAscending={isAscending}
      />
    </div>
  );
}
