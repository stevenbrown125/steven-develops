// app/portfolio/technologies/page.tsx

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import Link from "next/link";
import { getAllProjectTechnologies } from "@/lib/mdx-utils";

export async function generateMetadata() {
  return {
    title: "Technologies | Portfolio",
    description: "Technologies used across projects",
  };
}

export default async function AllTechnologiesPage() {
  const technologies = await getAllProjectTechnologies();

  const breadcrumbs = [
    { href: "/portfolio", title: "Portfolio" },
    { href: "/portfolio/technologies", title: "Technologies" },
  ];

  return (
    <div className="relative flex-grow px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <h2 className="heading-hr mb-6">All Technologies</h2>

      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 lg:gap-6"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {technologies.map((tech, index) => (
          <Link
            key={`tech-${tech.slug}`}
            href={`/portfolio/technologies/${tech.slug}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="
              rounded-lg
              border
              border-zinc-200
              dark:border-zinc-700
              p-4
              hover:border-primary
              transition-colors
            "
          >
            <span
              itemProp="name"
              className="block text-lg font-semibold text-primary-dark dark:text-primary-soft"
            >
              {tech.tag}
            </span>

            <span className="mt-1 block text-sm text-neutral-500 dark:text-neutral-400">
              {tech.items.length} project
              {tech.items.length === 1 ? "" : "s"}
            </span>

            <meta itemProp="position" content={String(index + 1)} />
          </Link>
        ))}
      </section>
    </div>
  );
}
