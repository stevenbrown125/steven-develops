import { getAllTags, getPostsByTag, getTagBySlug } from "@/lib/sanityQueries";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import { generateTagListingSEOData } from "@/lib/seo";
import PostCard from "@/components/features/Blog/PostCard";

type Props = {
    params: { slug: string }
}

export async function generateStaticParams() {
    const categories = await getAllTags();
    return categories.map(({ slug }) => ({
        slug
    }));
}

export async function generateMetadata({ params: { slug }, }: Props) {
    const tag = await getTagBySlug(slug)
    const metadata = generateTagListingSEOData(tag)
    return metadata;
}

export default async function BlogTagPage({ params: { slug } }: Props) {
    const tag = await getTagBySlug(slug)
    const posts = await getPostsByTag(slug);
    const breadcrumbs = [{ href: '/blog', title: 'Blog' }, { href: '/tags', title: 'Tags' }, { href: slug, title: tag.title }]
    const latestPosts = posts
        .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
        .slice(0, 3);

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
                <h2 className="heading-hr">All {tag.title} Posts</h2>
                <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6" itemScope itemType="http://schema.org/ItemList">
                    {posts.map((post, i) => (
                        <PostCard post={post} key={`post-${i}`} />
                    ))}
                </section>
            </div>
        </>
    );
}
