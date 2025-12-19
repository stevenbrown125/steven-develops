// File: /app/blog/tags/page.tsx

import type { Metadata } from "next";

import Breadcrumbs from "@/components/shared/utilities/Breadcrumb";
import SkillsSection from "@/components/features/Section/SkillsSection";
import TagChipset from "@/components/shared/TagChipset";
import { generateSEO, seoContent } from "@/lib/seo";
import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { buildBlogTagIndex } from "@/lib/tag-index";

export const metadata: Metadata = generateSEO(seoContent.blogTags).metadata;

export default async function AllTagsPage() {
  const breadcrumbs = [
    { href: "/blog", title: "Blog" },
    { href: "/blog/tags", title: "Tags" },
  ];

  const items = await getAllListablePosts(); // posts + excerpts
  const tags = buildBlogTagIndex(items);

  return (
    <div className="relative flex-grow px-4 py-4 mx-auto max-w-7xl lg:px-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <SkillsSection title="All Tags">
        <TagChipset
          tags={tags.map((tag) => ({
            title: tag.tag, // already display-safe
            href: `/blog/tags/${tag.slug}`,
          }))}
        />
      </SkillsSection>
    </div>
  );
}
