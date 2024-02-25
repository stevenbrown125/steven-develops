import { getAllProjects } from "@/lib/sanityQueries";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import ProjectListing from "@/components/features/Portfolio/ProjectListing";

export async function generateMetadata() {
    // const { title, description } = await getSiteMetaData();
    // const pageTitle = `${title} | All Blog Posts`;
    // return {
    //   title: pageTitle,
    //   description,
    // };
}

export default async function PortfolioPage(): Promise<JSX.Element> {
    const projects = await getAllProjects();

    const breadcrumbs = [{ href: '/portfolio', title: 'Portfolio' }]
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
                <h2 className="heading-hr">All Portfolio Projects</h2>
                <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6" itemScope itemType="http://schema.org/ItemList">
                    {projects.map((project, i) => (
                        <ProjectListing project={project} key={`project-${i}`} />
                    ))}
                </section>
            </div>
        </>
    );
}
