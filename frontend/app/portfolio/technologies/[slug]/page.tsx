// app/portfolio/technologies/[slug]/page.tsx

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import ProjectGrid from "@/components/features/Portfolio/ProjectGrid";
import { getAllProjectTechnologies } from "@/lib/mdx-utils";

type RouteParams = {
  slug: string;
};

type SearchParams = {
  sort?: "asc" | "desc";
};

export async function generateStaticParams() {
  const technologies = await getAllProjectTechnologies();
  return technologies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const technologies = await getAllProjectTechnologies();
  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) return {};

  return {
    title: `${technology.tag} | Portfolio`,
    description: `Projects built using ${technology.tag}`,
  };
}

export default async function TechnologyPage({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams?: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  const isAscending = resolvedSearchParams?.sort === "asc";

  const technologies = await getAllProjectTechnologies();
  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) {
    // ONLY 404 if the slug itself is unknown
    return null;
  }

  const breadcrumbs = [
    { href: "/portfolio", title: "Portfolio" },
    { href: "/portfolio/technologies", title: "Technologies" },
    {
      href: `/portfolio/technologies/${technology.slug}`,
      title: technology.tag,
    },
  ];

  return (
    <div className="relative flex-grow px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      {technology.items.length > 0 ? (
        <ProjectGrid
          title={`Projects using ${technology.tag}`}
          projects={technology.items}
          isAscending={isAscending}
        />
      ) : (
        <section className="mt-8 text-center">
          <h2 className="heading-hr mb-4">{technology.tag}</h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            No projects are currently tagged with this technology.
          </p>
        </section>
      )}
    </div>
  );
}
