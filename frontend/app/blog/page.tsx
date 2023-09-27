import { getAllPosts } from "../lib/sanityQueries";

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  return (
    <main className="relative pt-20 md:pt-24 text-stone-800 flex flex-col justify-center flex-grow min-h-screen">
      {posts.map((post) => post.title)}
    </main>
  );
}
