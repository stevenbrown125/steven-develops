import { getAllPosts, getPostBySlug } from "@/app/lib/sanityQueries";
import { Post } from "@/app/types/Post";
import { PortableText } from "@portabletext/react";

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
    <>
      <main className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-stone-900">{post.title}</h1>
        <PortableText value={post.body} />
      </main>
    </>
  );
}
