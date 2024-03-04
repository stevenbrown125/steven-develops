import { getAllPosts } from "@/lib/sanityQueries"
import { groupPostsByYears } from "@/lib/postHelpers"
import { Page } from "@/types"
import ListingPage from "@/components/features/Blog/ListingPage"

export async function generateMetadata() {
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | All Blog Posts`;
  // return {
  //   title: pageTitle,
  //   description,
  // };
}

export default async function BlogPage({ searchParams }: Page) {
  const posts = await getAllPosts()
  const breadcrumbs = [{ href: "/blog", title: "Blog" }]
  const groupedPosts = groupPostsByYears(posts)
  const isReversed = searchParams?.sort === "asc"

  return (
    <ListingPage
      title="All Posts"
      breadcrumbs={breadcrumbs}
      groupedPosts={groupedPosts}
      isReversed={isReversed}
    />
  )
}
