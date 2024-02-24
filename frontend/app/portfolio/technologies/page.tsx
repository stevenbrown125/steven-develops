import { getAllTechnologies } from "@/lib/sanityQueries";
import Breadcrumbs from "@/components/Breadcrumb";

export async function generateMetadata() {
    // const { title, description } = await getSiteMetaData();
    // const pageTitle = `${title} | All Blog Posts`;
    // return {
    //   title: pageTitle,
    //   description,
    // };
}

export default async function AllTechnologiesPage(): Promise<JSX.Element> {
    const technologies = await getAllTechnologies();

    const breadcrumbs = [{ href: '/portfolio', title: 'Portfolio' }, { href: '/porfolio/technologies', title: 'Technologies' }]
    return (
        <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <h2 className="heading-hr">All Technologies</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-4 lg:gap-6" itemScope itemType="http://schema.org/ItemList">
                {technologies.map((technology, i) => (
                    // <CategoryCard category={category} key={`category-${i}`} />
                    <></>
                ))}
            </section>
        </div>
    );
}
