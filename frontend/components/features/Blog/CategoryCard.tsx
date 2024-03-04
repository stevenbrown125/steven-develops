import {
  Card,
  CardBody,
  CardHeader,
  CardLink,
} from "@/components/core/Card/Card"
import Figure from "@/components/core/Figure/Figure"
import { CategegoryProps } from "@/types"

const CategoryCard: React.FC<CategegoryProps> = ({ category }) => {
  const { title, slug, image, alt } = category

  const cardLinkSchema = {
    itemProp: "url",
  }
  const cardSchema = {
    itemProp: "itemListElement",
    itemScope: true,
    itemType: "http://schema.org/Article",
  }

  return (
    <CardLink href={`/blog/categories/${slug}`} schemaProps={cardLinkSchema}>
      <Card schemaProps={cardSchema}>
        <CardHeader>
          <Figure figure={{ href: image, alt, classes: "listing" }} />
          <h3
            itemType="headline"
            className="mx-4 text-center hover:text-primary heading-hr"
          >
            {title}
          </h3>
        </CardHeader>
        <CardBody>
          <p itemProp="description">{category.description}</p>
        </CardBody>
      </Card>
    </CardLink>
  )
}

export default CategoryCard
