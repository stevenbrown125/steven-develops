// File: app/portfolio/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import ProjectGridClient from "@/components/features/Portfolio/ProjectGridClient";
import { getAllProjectData } from "@/lib/mdx-utils";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(seoContent.portfolio).metadata;

// Optional, but makes intent explicit
export const dynamic = "force-static";

export default async function PortfolioPage() {
  const projects = await getAllProjectData();

  const breadcrumbs = [{ href: "/portfolio", title: "Portfolio" }];

  return (
    <div className="relative mx-auto flex-grow max-w-7xl px-4 py-4 lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ProjectGridClient title="Portfolio" initialProjects={projects} />
    </div>
  );
}
