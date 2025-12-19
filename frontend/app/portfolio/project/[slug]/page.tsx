// File: /app/portfolio/[slug]/page.tsx

import type { Metadata } from "next";

import Project from "@/components/features/Portfolio/Project";
import ProjectNavigation from "@/components/features/Portfolio/ProjectNavigation";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import { getAllProjectData, getProjectMetadata } from "@/lib/mdx-utils";
import { getAdjacentProjects } from "@/lib/projectNavigation";
import { generateSEO, seoContent } from "@/lib/seo";

type RouteParams = {
  slug: string;
};

export async function generateStaticParams() {
  const projects = await getAllProjectData();
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectMetadata(slug);

  return generateSEO(
    seoContent.portfolioProject.build({
      title: project.title,
      slug,
      description: project.description,
      image: project.image,
      technologies: project.technologies,
    })
  ).metadata;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const projects = await getAllProjectData();
  const project = await getProjectMetadata(slug);

  const { prev, next } = getAdjacentProjects(projects, slug);

  const MDXContent = (await import(`@/content/projects/${slug}.mdx`)).default;

  const breadcrumbs = [
    { href: "/portfolio", title: "Portfolio" },
    { href: `/portfolio/${slug}`, title: project.title },
  ];

  return (
    <div className="relative mx-auto mt-4 flex-grow max-w-7xl px-4 py-4 lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Project project={project}>
        <MDXContent />
      </Project>

      <ProjectNavigation previous={prev} next={next} />
    </div>
  );
}
