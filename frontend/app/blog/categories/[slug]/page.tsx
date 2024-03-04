import {
  getAllCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/sanityQueries"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import { generateCategoryListingSEOData } from "@/lib/seo"
import { Page } from "@/types/Page"
import PostGrid from "@/components/features/Blog/PostGrid"
import { groupPostsByYears } from "@/lib/postHelpers"
import ListingPage from "@/components/features/Blog/ListingPage"

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

export default async function BlogCategoryPage({ params, searchParams }: Page) {
  if (!params) return <></>

  const { slug } = params
  const { title } = await getCategoryBySlug(slug)
  const posts = await getPostsByCategory(slug)
  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/categories", title: "Categories" },
    { href: slug, title },
  ]

  const groupedPosts = groupPostsByYears(posts)
  const isReversed = searchParams?.sort === "asc"

  return (
    <ListingPage
      title={`All ${title} Posts`}
      breadcrumbs={breadcrumbs}
      groupedPosts={groupedPosts}
      isReversed={isReversed}
    />
  )
}
