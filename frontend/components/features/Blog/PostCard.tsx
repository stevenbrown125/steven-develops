import { PostProps } from "@/types";
import { Card, CardBody, CardHeader, CardLink } from "@/components/core/Card/Card"
import Figure from "@/components/core/Figure/Figure";
import { format } from "date-fns";

const PostCard = ({ post }: PostProps) => {
    const { title, excerpt, slug, image, alt, publishedAt } = post;
    const date = new Date(publishedAt);

    const cardLinkSchema = {
        itemProp: "url"
    }
    const cardSchema = {
        itemProp: "itemListElement",
        itemScope: true,
        itemType: "http://schema.org/Article"
    }

    return (
        <CardLink href={`/blog/post/${slug}`} schemaProps={cardLinkSchema}>
            <Card schemaProps={cardSchema}>
                <CardHeader>
                    <Figure figure={{ href: image, alt, classes: 'listing' }} />
                    <h3 itemType="headline" className="mx-4 hover:text-primary text-center heading-hr">{title}</h3>
                    <p className="px-2 text-xs md:text-sm pt-1 text-center">
                        Written on
                        <time
                            dateTime={publishedAt}
                            itemType="datePublished"
                        >
                            {format(date, "EEEE MMMM do, yyyy")}
                        </time>
                    </p>
                </CardHeader>
                <CardBody>
                    <p itemProp="description">
                        {excerpt}..{" "}
                        <span className="text-sm italic border-b border-primary border-dotted hover:text-primary">Read more</span>
                    </p>
                </CardBody>
            </Card>
        </CardLink>)
}

export default PostCard;