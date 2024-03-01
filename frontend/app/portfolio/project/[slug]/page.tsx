import { getAllProjects, getProjectBySlug } from "@/lib/sanityQueries"
import { Page } from "@/types/Page"
import Project from "@/components/features/Portfolio/Project"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Page) {
  if (!params) return {}

  const { slug } = params
  const project = await getProjectBySlug(slug)
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | ${post.title}`;
  // const pageDescription = post.excerpt ? post.excerpt : description;
  return {}
}

export default async function ProjectPage({ params }: Page) {
  if (!params) return <></>

  const project = await getProjectBySlug(params.slug)

  const { title, slug } = project

  const breadcrumbs = [
    { href: "/portfolio", title: "Portfolio" },
    { href: slug, title },
  ]

  return (
    <div className="relative flex-grow mx-auto max-w-7xl">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Project project={project}></Project>
    </div>
  )
}
