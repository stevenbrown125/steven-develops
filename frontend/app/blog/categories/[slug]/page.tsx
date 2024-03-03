import {
  getAllCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/sanityQueries"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import { generateCategoryListingSEOData } from "@/lib/seo"
import { Page } from "@/types/Page"
import PostGrid from "@/components/features/Blog/PostGrid"

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Page) {
  if (!params) return {}
  const { slug } = params
  const category = await getCategoryBySlug(slug)
  const metadata = generateCategoryListingSEOData(category)
  return metadata
}

export default async function BlogCategoryPage({ params }: Page) {
  if (!params) return <></>
  const { slug } = params

  const { title } = await getCategoryBySlug(slug)
  const posts = await getPostsByCategory(slug)

  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/categories", title: "Categories" },
    { href: slug, title },
  ]

  return (
    <div className="relative flex-grow mx-auto max-w-7xl">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <PostGrid title={title} posts={posts} />
    </div>
  )
}
