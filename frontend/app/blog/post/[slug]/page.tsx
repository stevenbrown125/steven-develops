import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/sanityQueries";
import { Post as IPost } from "@/types/Post";
import Post from "@/components/ui/Blog/Post";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post: IPost = await getPostBySlug(slug);
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | ${post.title}`;
  // const pageDescription = post.excerpt ? post.excerpt : description;
  return {
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getAllPosts();
  const post: IPost = await getPostBySlug(params.slug);
  const latestPosts = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <Post post={post} />
  );
}
