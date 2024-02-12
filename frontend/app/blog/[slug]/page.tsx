import { Location } from "@/app/lib/enums";
import {
  getAllPosts,
  getPostBySlug,
  getSiteMetaData,
} from "@/app/lib/sanityQueries";
import { Post } from "@/app/types/Post";
import Bio from "@/components/Bio";
import Sidebar from "@/components/Sidebar";
import SplashImage from "@/components/SplashImage";
import BlogPost from "@/components/post/BlogPost";

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
  const post: Post = await getPostBySlug(slug);
  const { title, description } = await getSiteMetaData();
  const pageTitle = `${title} | ${post.title}`;
  const pageDescription = post.excerpt ? post.excerpt : description;
  return {
    title: pageTitle,
    description: pageDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getAllPosts();
  const post: Post = await getPostBySlug(params.slug);
  const latestPosts = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="relative text-neutral-800 flex-grow">
      <SplashImage location={Location.Campaignia} />
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 sm:grid sm:grid-cols-12 gap-4 px-4">
        {/* <Sidebar posts={latestPosts} /> */}
        <div className="col-span-9">
          <BlogPost post={post} />
          <Bio />
        </div>
      </div>
    </main>
  );
}
