import { getAllTags, getPostsByTag, getTagBySlug } from "@/lib/sanityQueries"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"
import { generateTagListingSEOData } from "@/lib/seo"
import { Page } from "@/types/Page"
import PostGrid from "@/components/features/Blog/PostGrid"
import { groupPostsByYears } from "@/lib/postHelpers"
import ListingPage from "@/components/features/Blog/ListingPage"

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

export default async function BlogTagPage({ params, searchParams }: Page) {
  if (!params) return <></>

  const { slug } = params
  const { title } = await getTagBySlug(slug)
  const posts = await getPostsByTag(slug)
  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/tags", title: "Tags" },
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
