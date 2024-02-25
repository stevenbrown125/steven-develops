import { getAllPosts } from "@/lib/sanityQueries";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import PostGrid from "@/components/shared/layout/PostGrid";

export async function generateMetadata() {
  // const { title, description } = await getSiteMetaData();
  // const pageTitle = `${title} | All Blog Posts`;
  // return {
  //   title: pageTitle,
  //   description,
  // };
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  const breadcrumbs = [{ href: '/blog', title: 'Blog' }]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <PostGrid title="Blog" posts={posts} />
    </>
  );
}
