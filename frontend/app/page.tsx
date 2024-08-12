import { getAllPosts } from "@/lib/sanityQueries"
import ProfileSection from "@/components/features/Section/ProfileSection"
import AboutSection from "@/components/features/Section/AboutSection"
import WorkSection from "@/components/features/Section/WorkSection"
import BlogSection from "@/components/features/Section/BlogSection"
import SkillsSection from "@/components/features/Section/SkillsSection"
import ContactCard from "@/components/shared/utilities/ContactCard"
import ExperienceSection from "@/components/features/Section/ExperienceSection"

export default async function Home() {
  const posts = await getAllPosts()
  const latestPosts = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3)

  return (
    <div className="relative flex-grow animate-fade-in-slide-down">
      <ProfileSection />
      <AboutSection />
      <WorkSection />
      <BlogSection posts={latestPosts} />
      <ExperienceSection />
      <SkillsSection />
      <ContactCard />
    </div>
  )
}
