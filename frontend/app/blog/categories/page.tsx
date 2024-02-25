import { getAllCategories } from "@/lib/sanityQueries";
import CategoryCard from "@/components/features/Blog/CategoryCard";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import PageGrid from "@/components/shared/layout/PageGrid";

export async function generateMetadata() {
    // const { title, description } = await getSiteMetaData();
    // const pageTitle = `${title} | All Blog Posts`;
    // return {
    //   title: pageTitle,
    //   description,
    // };
}

export default async function AllCategoryPage() {
    const catgories = await getAllCategories();
    const breadcrumbs = [{ href: '/blog', title: 'Blog' }, { href: '/blog/categories', title: 'Categories' }]

    return (
        <div className="max-w-7xl mx-auto relative flex-grow">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PageGrid title="All Categories">
                {catgories.map((category, i) => (
                    <CategoryCard category={category} key={`category-${i}`} />
                ))}
            </PageGrid>
        </div>
    );
}


