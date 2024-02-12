import PostListing from "@/components/post/PostListing";
import { getAllPosts, getSiteMetaData } from "../lib/sanityQueries";
import { FaNewspaper } from "react-icons/fa6";
import SplashImage from "@/components/SplashImage";
import { Location } from "../lib/enums";
import Sidebar from "@/components/Sidebar";

export async function generateMetadata() {
  const { title, description } = await getSiteMetaData();
  const pageTitle = `${title} | All Blog Posts`;
  return {
    title: pageTitle,
    description,
  };
}

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  const latestPosts = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="relative text-neutral-800 flex-grow">
      <SplashImage location={Location.Garda} />
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 sm:grid sm:grid-cols-12 gap-4 px-4">
        {/* <Sidebar posts={latestPosts} /> */}
        <div className="col-span-9">
          <h1 className="text-xl font-medium bg-yellow-400 rounded-md p-4 flex gap-x-2 items-center opacity-90 backdrop-blur-md mb-4 ">
            <FaNewspaper />
            All Blog Posts
          </h1>
          {posts.map((post, i) => (
            <PostListing post={post} key={`post-${i}`} />
          ))}
        </div>
      </div>
    </main>
  );
}
