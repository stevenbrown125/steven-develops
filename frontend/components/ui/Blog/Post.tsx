import { Post } from "@/types/Post";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Figure from "../Figure";
import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import Breadcrumbs from "@/components/Breadcrumb";

const tags = ['temp', 'temp2']
export default function Post({ post }: { post: Post }) {
  const { title, image, publishedAt, alt, category, slug } = post;
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
            in <Link href={`/categories/${category}`} itemProp="articleSection">{category}</Link>
            <span className="sr-only">by <span itemProp="author">Steven Brown</span></span>
          </small>
          <Figure figure={{ href: image, alt }} />
        </header>
        <section itemProp="articleBody">
          <PortableText value={post.body} />
        </section>
        <footer>
          <ul itemProp="keywords">
            {tags.map(tag => <li key={`tag-${tag}`}><Link href={`/tags/${tag}`}><FaTag />{tag}</Link></li>)}
          </ul>
        </footer>
      </article>
    </>
  );
}
