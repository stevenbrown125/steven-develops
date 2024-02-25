
import { format } from "date-fns";
import Link from "next/link";
import Figure from "../../core/Figure/Figure";
import { Project } from "@/types/Project";

export default function ProjectListing({ project }: { project: Project }) {
  const { title, description, slug, image, startDate, technologies } = project;
  const date = new Date(startDate);
  const { href, alt } = image
  return (
    <Link href={`/portfolio/project/${slug}`} itemProp="url" className="mx-auto max-w-7xl mt-4 pb-6 bg-zinc-300/40 dark:bg-zinc-700/40 lg:rounded-b-md shadow-xl z-10 relative grow-0 group max-w-full transition duration-300 ease-in-out hover:-translate-y-2">
      <article itemProp="itemListElement" itemScope itemType="http://schema.org/CreativeWork">
        <header className="mb-2">
          <Figure figure={{ href, alt, classes: 'listing' }} />
          <h3 itemType="headline" className="mx-4 hover:text-primary text-center heading-hr">{title}</h3>
          <p className="px-2 text-xs md:text-sm pt-1 text-center">
            Started on
            <time
              dateTime={startDate}
              itemType="dateCreated"
            >
              {format(date, "EEEE MMMM do, yyyy")}
            </time>
          </p>
        </header>
        <section className="px-4 md:px-8">
          <p itemProp="description">
            {description}..{" "}
            <span className="text-sm italic border-b border-primary border-dotted hover:text-primary">Read more</span>
          </p>
        </section>
      </article>
    </ Link>
  );
}
// TODO
//  <p itemProp="keywords">tech, tech<p/> 
