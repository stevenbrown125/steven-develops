import PostCard from "@/components/features/Blog/PostCard"
import { Post } from "@/types"

interface PostGridProps {
  posts: Post[]
}
const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className="animate-fade-in-slide-down">
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
