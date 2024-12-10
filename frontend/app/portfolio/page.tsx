import { getAllProjects } from "@/lib/sanityQueries"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import ProjectCard from "@/components/features/Portfolio/ProjectCard"
import ProjectGrid from "@/components/shared/layout/ProjectGrid"

export async function generateMetadata() {
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | All Blog Posts`;
  // return {
  //   title: pageTitle,
  //   description,
  // };
}

export default async function PortfolioPage() {
  const projects = await getAllProjects()

  const breadcrumbs = [{ href: "/portfolio", title: "Portfolio" }]
  return (
    <div className="relative flex-grow px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ProjectGrid title="Portfolio" projects={projects} />
    </div>
  )
}
