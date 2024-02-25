import { Card, CardBody, CardHeader, CardLink } from "@/components/core/Card/Card"
import Figure from "@/components/core/Figure/Figure";
import { ProjectProps } from "@/types";
import { format } from "date-fns";

const ProjectCard = ({ project }: ProjectProps) => {
    const { title, description, slug, image, startDate, technologies } = project;
    const date = new Date(startDate);
    const { href, alt } = image

    const cardLinkSchema = {
        itemProp: "url"
    }
    const cardSchema = {
        itemProp: "itemListElement",
        itemScope: true,
        itemType: "http://schema.org/Article"
    }

    return (
        <CardLink href={`/blog/categories/${slug}`} schemaProps={cardLinkSchema}>
            <Card schemaProps={cardSchema}>
                <CardHeader>
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
                </CardHeader>
                <CardBody>
                    <p itemProp="description">
                        {description}..{" "}
                        <span className="text-sm italic border-b border-primary border-dotted hover:text-primary">Read more</span>
                    </p>
                </CardBody>
            </Card>
        </CardLink>
    )
}

// TODO
//  <p itemProp="keywords">tech, tech<p/> 
export default ProjectCard;