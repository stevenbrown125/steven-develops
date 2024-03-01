import { ProjectProps } from "@/types"
import {
  Card,
  CardBody,
  CardHeader,
  CardLink,
} from "@/components/core/Card/Card"
import Figure from "@/components/core/Figure/Figure"
import { format } from "date-fns"

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, description, slug, image, startDate, technologies } = project
  const date = new Date(startDate)
  const { href, alt } = image

  const cardLinkSchema = {
    itemProp: "url",
  }
  const cardSchema = {
    itemProp: "itemListElement",
    itemScope: true,
    itemType: "http://schema.org/Article",
  }

  return (
    <CardLink href={`/portfolio/project/${slug}`} schemaProps={cardLinkSchema}>
      <Card schemaProps={cardSchema}>
        <CardHeader>
          <Figure figure={{ href, alt, classes: "listing" }} />
          <h3
            itemType="headline"
            className="mx-4 text-center hover:text-primary heading-hr"
          >
            {title}
          </h3>
          <p className="px-2 pt-1 text-xs text-center md:text-sm">
            Started on
            <time dateTime={startDate} itemType="dateCreated">
              {format(date, "EEEE MMMM do, yyyy")}
            </time>
          </p>
        </CardHeader>
        <CardBody>
          <p itemProp="description">
            {description}..{" "}
            <span className="text-sm italic border-b border-dotted border-primary hover:text-primary">
              Read more
            </span>
          </p>
        </CardBody>
      </Card>
    </CardLink>
  )
}

// TODO
//  <p itemProp="keywords">tech, tech<p/>
export default ProjectCard
