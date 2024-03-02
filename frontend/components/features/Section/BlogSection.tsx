import Link from "next/link"
import PostCard from "../Blog/PostCard"
import { FaArrowRight } from "react-icons/fa6"
import { Post } from "@/types"

interface BlogSectionProps {
  posts: Post[]
}
const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="relative z-30 pb-8 shadow-lg dark:bg-zinc-800">
      <header className="flex px-4 mx-auto xl:px-8 max-w-7xl">
        <h2 className="px-12 mb-4 leading-10 heading-hr">My Blog</h2>
      </header>
      <div className="grid gap-4 sm:px-4 xl:px-16 lg:grid-cols-3">
        {posts.map((post, i) => {
          return <PostCard post={post} key={`post-${i}`} />
        })}
      </div>
      <div className="flex justify-center pb-6 mt-12">
        <Link
          href="/blog"
          className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide rounded-md shadow-xl gap-x-1 bg-primary hover:opacity-90 text-zinc-50"
        >
          View All Posts <FaArrowRight className="mt-0.5" />
        </Link>
      </div>
    </section>
  )
}

export default BlogSection
