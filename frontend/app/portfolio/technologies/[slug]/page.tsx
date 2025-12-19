// app/portfolio/technologies/[slug]/page.tsx

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import ProjectGridClient from "@/components/features/Portfolio/ProjectGridClient";
import { getAllProjectTechnologies } from "@/lib/mdx-utils";

type RouteParams = {
  slug: string;
};

export const dynamic = "force-static";

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
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const technologies = await getAllProjectTechnologies();
  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) {
    // ONLY 404/null if the slug itself is unknown
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
    <div className="relative mx-auto flex-grow max-w-7xl px-4 py-4 lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      {technology.items.length > 0 ? (
        <ProjectGridClient
          title={`Projects using ${technology.tag}`}
          initialProjects={technology.items}
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
