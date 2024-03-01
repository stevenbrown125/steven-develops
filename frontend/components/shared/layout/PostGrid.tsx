import PostCard from "@/components/features/Blog/PostCard"
import { Post } from "@/types"

interface PostGridProps {
  title: string
  posts: Post[]
}
const PostGrid = ({ title, posts }: PostGridProps) => {
  return (
    <div className="animate-fade-in-slide-down">
      <h2 className="heading-hr">All {title} Posts</h2>
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        {posts.map((post, i) => (
          <PostCard post={post} key={`post-${i}`} />
        ))}
      </section>
    </div>
  )
}

export default PostGrid
