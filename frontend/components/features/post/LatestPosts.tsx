import { Post } from "@/types/Post";
import { format } from "date-fns";
import Link from "next/link";
import { FaBlog } from "react-icons/fa6";

export default function LatestPosts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h3 className="flex items-center justify-center p-4 text-xl font-medium text-center shadow-md bg-yellow-400 rounded-md md:text-left md:justify-start">
        <FaBlog className="mr-2" />
        Latest Blog Posts
      </h3>
      <div className="">
        {/* Posts */}
        {posts.map((post, i) => {
          const date = new Date(post.publishedAt);
          return (
            <article
              className="pb-2 border-b border-neutral-200 last:border-none"
              key={`latest-${i}`}
            >
              <header className="relative">
                <h2 className="px-8 pt-4 pb-2 text-lg text-center md:px-4 md:text-left">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="border-b-2 border-amber-600 hover:text-amber-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="px-8 pb-2 sm:text-xs font-light text-center md:px-4 md:text-left">
                  Written on
                  <time
                    dateTime={post.publishedAt}
                    itemType="datePublished"
                    className="pl-1"
                  >
                    {format(date, "EEEE MMMM do, yyyy")}
                  </time>
                </p>
              </header>
              <div className="px-4 pb-4">
                <div className="text-base">
                  {post.excerpt ? post.excerpt : "Read more"}
                  ...
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
