import { getAllCategories, getCategoryBySlug, getPostsByCategory } from "@/lib/sanityQueries";
import Listing from "@/components/ui/Blog/Listing";
import Breadcrumbs from "@/components/Breadcrumb";
import { generateCategoryListingSEOData } from "@/lib/seo";

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map(({ slug }) => ({
    slug
  }));
}

export async function generateMetadata({ params: { slug }, }: Props) {
  const category = await getCategoryBySlug(slug)
  const metadata = generateCategoryListingSEOData(category)
  return metadata;
}


export default async function BlogCategoryPage({ params: { slug } }: Props) {
  const category = await getCategoryBySlug(slug)
  const posts = await getPostsByCategory(slug);
  const breadcrumbs = [{ href: '/blog', title: 'Blog' }, { href: '/categories', title: 'Categories' }, { href: slug, title: category.title }]

  const latestPosts = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h2>All {category.title} Posts</h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6" itemScope itemType="http://schema.org/ItemList">
        {posts.map((post, i) => (
          <Listing post={post} key={`post-${i}`} />
        ))}
      </section>
    </div>
  );
}
