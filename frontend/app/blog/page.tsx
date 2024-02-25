import { getAllPosts } from "@/lib/sanityQueries";
import Listing from "@/components/features/Blog/Listing";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";

export async function generateMetadata() {
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | All Blog Posts`;
  // return {
  //   title: pageTitle,
  //   description,
  // };
}

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  const latestPosts = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  const breadcrumbs = [{ href: '/blog', title: 'Blog' }]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
        <h2 className="heading-hr">All Blog Posts</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-4 lg:gap-6" itemScope itemType="http://schema.org/ItemList">
          {posts.map((post, i) => (
            <Listing post={post} key={`post-${i}`} />
          ))}
        </section>
      </div>
    </>
  );
}
