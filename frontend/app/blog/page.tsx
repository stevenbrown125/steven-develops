import PostListing from "@/components/post/PostListing";
import { getAllPosts } from "../lib/sanityQueries";
import Image from "next/image";
import { FaNewspaper } from "react-icons/fa6";

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  return (
    <main className="relative text-stone-800 flex-grow">
      <Image
        src="../../images/campaignia-optimized.jpg"
        fill={true}
        alt="Campaignia, Italy"
        className="-z-10"
        priority={true}
      />
      <div className="max-w-7xl mx-auto mt-10">
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
