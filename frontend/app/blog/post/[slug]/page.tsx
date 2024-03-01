import { getAllPosts, getPostBySlug } from "@/lib/sanityQueries"
import Post from "@/components/features/Blog/Post"
import { Page } from "@/types/Page"
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Page) {
  if (!params) return {}
  const { slug } = params
  const post = await getPostBySlug(slug)
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | ${post.title}`;
  // const pageDescription = post.excerpt ? post.excerpt : description;
  return {}
}

export default async function BlogPostPage({ params }: Page) {
  if (!params) return <></>
  const { slug } = params

  const post = await getPostBySlug(slug)

  const { title } = post

  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: slug, title },
  ]

  return (
    <div className="relative flex-grow mx-auto max-w-7xl">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Post post={post} />
    </div>
  )
}
