import PostListing from "@/components/post/PostListing";
import { getAllPosts, getSiteMetaData } from "../lib/sanityQueries";
import { FaNewspaper } from "react-icons/fa6";
import SplashImage from "@/components/SplashImage";
import { Location } from "../lib/enums";

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
  return (
    <main className="relative text-neutral-800 flex-grow">
      <SplashImage location={Location.Garda} />
      <div className="max-w-5xl mx-auto mt-10 xl:max-w-7xl">
        <h1 className="text-2xl font-bold bg-yellow-400 rounded-md p-4 flex gap-x-2 items-center opacity-90 backdrop-blur-md mb-4 ">
          <FaNewspaper />
          All Blog Posts
        </h1>
        {posts.map((post) => (
          <PostListing post={post} />
        ))}
      </div>
    </main>
  );
}
