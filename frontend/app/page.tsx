// File: /app/page.tsx

import type { Metadata } from "next";

import ProfileSection from "@/components/features/Section/ProfileSection";
import AboutSection from "@/components/features/Section/AboutSection";
import WorkSection from "@/components/features/Section/WorkSection";
import BlogSection from "@/components/features/Section/BlogSection";
import SkillsSection from "@/components/features/Section/SkillsSection";
import ContactCard from "@/components/shared/utilities/ContactCard";
import ExperienceSection from "@/components/features/Section/ExperienceSection";

import { getAllListablePosts } from "@/lib/getAllListablePosts";
import { getAllProjectData } from "@/lib/mdx-utils";
import { buildProjectTechnologyIndex } from "@/lib/tag-index";
import { generateSEO, seoContent } from "@/lib/seo";

export const metadata: Metadata = generateSEO(seoContent.home).metadata;

export default async function Home() {
  const posts = await getAllListablePosts(); // ← blog posts + excerpts
  const projects = await getAllProjectData();

  const latestPosts = posts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  const technologyIndex = buildProjectTechnologyIndex(projects);

  return (
    <div className="relative flex-grow">
      <ProfileSection />
      <AboutSection />
      <WorkSection />
      <BlogSection posts={latestPosts} />
      <ExperienceSection />
      <SkillsSection technologies={technologyIndex} />
      <ContactCard />
    </div>
  );
}
