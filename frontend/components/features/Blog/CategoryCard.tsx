
import Link from "next/link";
import { Category } from "@/types";
import Figure from "@/components/core/Figure/Figure";

export default function CategoryCard({ category }: { category: Category }) {
  const { title, slug, image, alt } = category;

  return (
    <Link href={`/blog/categories/${slug}`} itemProp="url" className="mx-auto max-w-7xl mt-4 pb-6 bg-zinc-300/40 dark:bg-zinc-700/40 lg:rounded-b-md shadow-xl z-10 relative grow-0 w-full group transition duration-300 ease-in-out hover:-translate-y-2">
      <article itemProp="itemListElement" itemScope itemType="http://schema.org/Article">
        <header className="mb-2">
          <Figure figure={{ href: image, alt, classes: 'listing' }} />
          <h3 itemType="headline" className="mx-4 hover:text-primary text-center heading-hr">{title}</h3>
        </header>
        <section className="px-4 md:px-8">
          <p>{category.description}</p>
        </section>
      </article>
    </ Link>
  );
}
