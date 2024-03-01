import { getAllTags, getPostsByTag, getTagBySlug } from "@/lib/sanityQueries"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import { generateTagListingSEOData } from "@/lib/seo"
import { Page } from "@/types/Page"
import PostGrid from "@/components/shared/layout/PostGrid"

export async function generateStaticParams() {
  const categories = await getAllTags()
  return categories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Page) {
  if (!params) return {}
  const { slug } = params
  const tag = await getTagBySlug(slug)
  const metadata = generateTagListingSEOData(tag)
  return metadata
}

export default async function BlogTagPage({ params }: Page) {
  if (!params) return <></>
  const { slug } = params

  const { title } = await getTagBySlug(slug)
  const posts = await getPostsByTag(slug)

  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/tags", title: "Tags" },
    { href: slug, title },
  ]

  return (
    <div className="relative flex-grow mx-auto max-w-7xl">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <PostGrid title={title} posts={posts} />
    </div>
  )
}
