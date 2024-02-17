import { getAllPosts, getSiteMetaData } from "../lib/sanityQueries";
import Listing from "@/components/ui/Blog/Listing";

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
    <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
      <h2>All Blog Posts</h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6" itemScope itemType="http://schema.org/ItemList">
        {posts.map((post, i) => (
          <Listing post={post} key={`post-${i}`} />
        ))}
      </section>
    </div>
  );
}
