import Chip from "@/components/shared/utilities/Chip"
import Link from "next/link"
import { FaHeart } from "react-icons/fa6"
import { SiSanity, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const AboutSection = () => {
  return (
    <section className="px-4 py-4 mb-4">
      <header className="flex px-8 mx-auto max-w-7xl">
        <h2 className="px-12 leading-10 heading-hr">About</h2>
      </header>
      <article className="text-center lg:text-left">
        <div className="px-8 mx-auto my-2 leading-7 max-w-7xl">
          <p className="py-2">
            I am a Software Engineer based in the United States, passionate
            about writing code and developing applications. My journey into tech
            followed a unique path, beginning with a 9-year enlistment as a
            Russian Cryptologic Linguist in the US Army. This experience has
            fueled my unwavering commitment to excel in all aspects of software
            engineering.
          </p>
          <p className="pb-4">
            My technical proficiency spans both front-end and back-end
            development with a particular emphasis on Javascript libraries and
            frameworks to include React, Angular, and NestJS. I have my AWS
            Solutions Architect and CompTia SEC+ Certifications and work almost
            daily in the cloud. Regarding DevOps, I love building effective
            CI/CD pipelines using Github Actions and Jenkins to streamline
            development workflows and enhance productivity. In my current role
            as a Systems Engineer and SIGINT/EW Subject Matter Expert (SME) for
            General Dynamics Mission Systems, I bring a Model-Based Systems
            Engineering (MBSE) approach to developing and improving the
            Army&apos;s Intelligence Electronic Warfare Tactical Proficiency
            Trainer (IEWTPT).
          </p>
          <p>
            I believe in being part of something bigger than myself, so
            let&#39;s connect! If you are interested in knowing more about my
            professional skills, take a gander at my{" "}
            <Link href="/portfolio">portfolio</Link>, or{" "}
            <Link href="/contact">contact</Link> me for my resume. I built this
            site with{" "}
            <span className="inline-flex items-center">
              <FaHeart className="text-red-500"></FaHeart>
              <span className="sr-only">love</span>
            </span>{" "}
            using{" "}
            <span className="inline-flex flex-wrap items-center justify-center">
              <Chip
                Icon={TbBrandNextjs}
                title="NextJS"
                slug="/portfolio/technologies/nextjs"
              />
              <Chip
                Icon={SiSanity}
                title="Sanity"
                slug="/portfolio/technologies/sanity"
              />
              and
              <Chip
                Icon={SiTailwindcss}
                title="Tailwind CSS"
                slug="/portfolio/technologies/tailwindcss"
              />
              .
            </span>{" "}
            I hope you like it!
          </p>
        </div>
      </article>
    </section>
  )
}

export default AboutSection
