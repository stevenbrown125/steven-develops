import { getAllPosts } from "../lib/sanityQueries";

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  return (
    <main className="relative pt-20 md:pt-24 text-stone-800">
      {posts.map((post) => post.title)}
    </main>
  );
}
