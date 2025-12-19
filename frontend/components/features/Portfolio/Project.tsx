import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import { ProjectProps } from "@/types";
import ExternalLink from "@/components/shared/utilities/ExternalLink";
import { formatDate } from "@/lib/formatDate";
import { slugify } from "@/lib/utils";
import DeviceShowcase from "./DeviceShowcase";

type Props = { project: ProjectProps["project"]; children: React.ReactNode };

const Project: React.FC<Props> = ({ project, children }) => {
  const {
    title,
    image,
    tabletImage,
    mobileImage,
    startDate,
    completionDate,
    technologies,
    liveURL,
  } = project;

  return (
    <article
      className="animate-fade-in-slide-down"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <header className="mb-10">
        <h1
          itemProp="headline"
          className="heading-hr text-3xl font-heading text-primary-dark dark:text-primary-soft"
        >
          {title}
        </h1>

        <p className="mt-2 text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
          Started on{" "}
          <time
            dateTime={startDate}
            itemProp="dateCreated"
            className="font-medium text-neutral-700 dark:text-neutral-300"
          >
            {formatDate(startDate)}
          </time>
          {completionDate ? (
            <>
              {" "}
              · Completed on{" "}
              <time
                dateTime={completionDate}
                itemProp="dateModified"
                className="font-medium text-neutral-700 dark:text-neutral-300"
              >
                {formatDate(completionDate)}
              </time>
            </>
          ) : (
            " · Ongoing"
          )}
        </p>

        <DeviceShowcase
          desktop={{ src: image, alt: `${title} desktop` }}
          tablet={tabletImage ? { src: tabletImage } : undefined}
          mobile={mobileImage ? { src: mobileImage } : undefined}
        />

        {liveURL && (
          <div className="mt-22 sm:mt-4 lg:mt-12">
            <ExternalLink
              href={liveURL}
              title={liveURL}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark dark:text-primary-soft dark:hover:text-primary"
            >
              View project live
            </ExternalLink>
          </div>
        )}
      </header>

      <section
        itemProp="text"
        className="prose max-w-none leading-relaxed prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary-dark dark:prose-invert"
      >
        {children}
      </section>

      {technologies?.length > 0 && (
        <footer className="mt-4 border-t border-zinc-300/60 pt-4 dark:border-zinc-700">
          <div className="rounded-xl bg-zinc-100 px-6 pb-4 dark:bg-zinc-800/70">
            <h3 className="mb-5 text-base font-heading font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
              Technologies
            </h3>

            <ul itemProp="keywords" className="flex flex-wrap gap-3">
              {technologies.map((tech) => {
                const techSlug = slugify(tech);

                return (
                  <li key={techSlug}>
                    <Link
                      href={`/portfolio/technologies/${techSlug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition-colors hover:bg-primary/10 hover:text-primary hover:ring-primary/10 dark:bg-zinc-700 dark:text-zinc-300 dark:ring-zinc-600 dark:hover:bg-primary/20 dark:hover:ring-primary/20"
                    >
                      <FaTag className="opacity-60" />
                      {tech}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </footer>
      )}
    </article>
  );
};

export default Project;
