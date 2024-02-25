import { getAllTechnologies, getProjectsByTechnology, getTechnologyBySlug } from "@/lib/sanityQueries";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import { generateTechnologyListingSEOData } from "@/lib/seo";
import { Page } from "@/types/Page";

export async function generateStaticParams() {
    const technologies = await getAllTechnologies();
    return technologies.map(({ slug }) => ({
        slug
    }));
}

export async function generateMetadata({ params }: Page) {
    if (!params) return
    const { slug } = params
    const technology = await getTechnologyBySlug(slug)
    const metadata = generateTechnologyListingSEOData(technology)
    return metadata;
}

export default async function TechnologyPage({ params }: Page) {
    if (!params) return
    const { slug } = params
    const technology = await getTechnologyBySlug(slug)
    const posts = await getProjectsByTechnology(slug);
    const breadcrumbs = [{ href: '/portfolio', title: 'Portfolio' }, { href: '/portfolio/technologies', title: 'Technologies' }, { href: slug, title: technology.title }]

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">

                <h2 className="heading-hr">All {technology.title} Posts</h2>
                <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6" itemScope itemType="http://schema.org/ItemList">
                    {posts.map((post, i) => (
                        // <Listing post={post} key={`post-${i}`} />
                        <></>
                    ))}
                </section>
            </div>
        </>
    );
}
