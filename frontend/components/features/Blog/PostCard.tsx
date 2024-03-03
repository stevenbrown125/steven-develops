import { PostProps } from "@/types"
import {
  Card,
  CardBody,
  CardHeader,
  CardLink,
} from "@/components/core/Card/Card"
import Figure from "@/components/core/Figure/Figure"
import { format } from "date-fns"

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { title, excerpt, slug, image, alt, publishedAt } = post
  const date = new Date(publishedAt)

  const cardLinkSchema = {
    itemProp: "url",
  }
  const cardSchema = {
    itemProp: "itemListElement",
    itemScope: true,
    itemType: "http://schema.org/Article",
  }

  return (
    <CardLink href={`/blog/post/${slug}`} schemaProps={cardLinkSchema}>
      <Card schemaProps={cardSchema}>
        <CardHeader>
          <Figure figure={{ href: image, alt, classes: "listing" }} />
          <h3
            itemType="headline"
            className="mx-4 text-center hover:text-primary heading-hr"
          >
            {title}
          </h3>
          <p className="px-2 pt-1 text-xs text-center md:text-sm">
            Written on
            <time dateTime={publishedAt} itemType="datePublished">
              {format(date, "EEEE MMMM do, yyyy")}
            </time>
          </p>
        </CardHeader>
        <CardBody>
          <p itemProp="description">
            {excerpt}..{" "}
            <span className="text-sm italic border-b border-dotted border-primary hover:text-primary">
              Read more
            </span>
          </p>
        </CardBody>
      </Card>
    </CardLink>
  )
}

export default PostCard
