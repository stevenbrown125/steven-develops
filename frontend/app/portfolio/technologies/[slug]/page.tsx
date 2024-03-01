import {
  getAllTechnologies,
  getProjectsByTechnology,
  getTechnologyBySlug,
} from "@/lib/sanityQueries"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import { generateTechnologyListingSEOData } from "@/lib/seo"
import { Page } from "@/types/Page"
import ProjectGrid from "@/components/shared/layout/ProjectGrid"

export async function generateStaticParams() {
  const technologies = await getAllTechnologies()
  return technologies.map(({ slug }) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Page) {
  if (!params) return
  const { slug } = params
  const technology = await getTechnologyBySlug(slug)
  const metadata = generateTechnologyListingSEOData(technology)
  return metadata
}

export default async function TechnologiesPage({ params }: Page) {
  if (!params) return
  const { slug } = params

  const { title } = await getTechnologyBySlug(slug)
  const projects = await getProjectsByTechnology(slug)

  const breadcrumbs = [
    { href: "/portfolio", title: "Portfolio" },
    { href: "/portfolio/technologies", title: "Technologies" },
    { href: slug, title },
  ]

  return (
    <div className="relative flex-grow mx-auto max-w-7xl">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ProjectGrid title={title} projects={projects} />
    </div>
  )
}
