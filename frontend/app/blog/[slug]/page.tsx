import { getAllPosts, getPostBySlug } from "@/app/lib/sanityQueries";
import { Post } from "@/app/types/Post";
import BlogPost from "@/components/post/BlogPost";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post = await getPostBySlug(params.slug);

  return (
    <main className="relative text-stone-800 flex-grow">
      <Image
        src="../../images/garda-optimized.jpg"
        fill={true}
        alt="Garda, Italy"
        className="-z-10"
        priority={true}
      />
      <div className="max-w-7xl mx-auto mt-10">
        <BlogPost post={post} />
      </div>
    </main>
  );
}
