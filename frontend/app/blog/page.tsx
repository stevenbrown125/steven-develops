import { getAllPosts } from "../lib/sanityQueries";

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  return (
    <main className="relative text-stone-800">
      {posts.map((post) => post.title)}
    </main>
  );
}
