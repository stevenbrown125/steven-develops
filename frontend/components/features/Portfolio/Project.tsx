import { format } from "date-fns";
import Figure from "../../core/Figure/Figure";
import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import { Project } from "@/types";
import RichText from "@/components/shared/utilities/RichText";

export default function Project({ project }: { project: Project }) {
    const { title, image, startDate, completionDate, technologies, slug, body } = project;
    const start = format(new Date(startDate), "EEEE MMMM do, yyyy");
    const { href, alt } = image
    return (
        <>
            <Breadcrumbs breadcrumbs={[{ href: '/blog', title: 'Blog' }, { href: slug, title }]} />
            <article className="animate-fade-in-slide-down" itemScope itemType="http://schema.org/BlogPosting">
                <header>
                    <h2 itemProp="headline">
                        {title}
                    </h2>
                    <small>
                        Started on
                        <time
                            dateTime={startDate}
                            itemProp="datePublished"
                        >
                            {start}
                        </time>
                        {completionDate ? `and completed on ${format(new Date(completionDate), "EEEE MMMM do, yyyy")}` : 'and ongoing.'}
                        <span className="sr-only">by <span itemProp="author">Steven Brown</span></span>
                    </small>
                    <Figure figure={{ href, alt }} />
                </header>
                <section itemProp="articleBody">
                    <RichText content={body as any} />
                </section>
                <footer>
                    <ul itemProp="keywords">
                        {technologies.map(technology => <li key={`tag-${technology.title}`}><FaTag /><Link href={`/portfolio/technologies/${technology.slug}`}>{technology.title}</Link></li>)}
                    </ul>
                </footer>
            </article>
        </>
    );
}
