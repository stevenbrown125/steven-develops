import { getAllCategories } from "@/lib/sanityQueries";
import CategoryCard from "@/components/features/Blog/CategoryCard";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";

export async function generateMetadata() {
    // const { title, description } = await getSiteMetaData();
    // const pageTitle = `${title} | All Blog Posts`;
    // return {
    //   title: pageTitle,
    //   description,
    // };
}

export default async function AllCategoryPage(): Promise<JSX.Element> {
    const catgories = await getAllCategories();

    const breadcrumbs = [{ href: '/blog', title: 'Blog' }, { href: '/blog/categories', title: 'Categories' }]
    return (
        <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <h2 className="heading-hr">All Categories</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-4 lg:gap-6" itemScope itemType="http://schema.org/ItemList">
                {catgories.map((category, i) => (
                    <CategoryCard category={category} key={`category-${i}`} />
                ))}
            </section>
        </div>
    );
}
