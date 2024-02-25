import { PostProps } from "@/types/Post";
import { format } from "date-fns";
import Figure from "../../core/Figure/Figure";
import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import RichText from "@/components/shared/utilities/RichText";

export default function Post({ post }: PostProps) {
  const { title, image, publishedAt, alt, category, tags, slug } = post;
  const date = format(new Date(publishedAt), "EEEE MMMM do, yyyy");
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ href: '/blog', title: 'Blog' }, { href: slug, title }]} />
      <article className="animate-fade-in-slide-down" itemScope itemType="http://schema.org/BlogPosting">
        <header>
          <h2 itemProp="headline">
            {title}
          </h2>
          <small>
            Published on
            <time
              dateTime={publishedAt}
              itemProp="datePublished"
            >
              {date}
            </time>
            in <Link href={`/blog/categories/${category.slug}`} itemProp="articleSection">{category.title}</Link>
            <span className="sr-only">by <span itemProp="author">Steven Brown</span></span>
          </small>
          <Figure figure={{ href: image, alt }} />
        </header>
        <section itemProp="articleBody">
          <RichText content={post.body} />
        </section>
        <footer>
          <ul itemProp="keywords">
            {tags.map(tag => <li key={`tag-${tag.title}`}><FaTag /><Link href={`/blog/tags/${tag.slug}`}>{tag.title}</Link></li>)}
          </ul>
        </footer>
      </article>
    </>
  );
}
