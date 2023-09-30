import { Post } from "@/app/types/Post";
import LatestPosts from "./post/LatestPosts";

export default function Sidebar({ posts }: { posts: Post[] }) {
  console.log(posts);
  return (
    <div className="hidden md:block rounded-md shadow-md bg-neutral-50 mb-4 col-span-3 h-min opacity-90">
      {posts && <LatestPosts posts={posts} />}
    </div>
  );
}
