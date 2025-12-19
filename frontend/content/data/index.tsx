import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { motion } from "motion/react";

export const EXPERIENCE = [
  {
    role: "System Engineer / SIGINT & EW Subject Matter Expert",
    company: "AIT Engineering",
    location: "Orlando, Florida",
    period: "May 2023 - Present",
    bullets: [
      "Served as a Feature Owner for high-visibility features in an agile environment for IEWTPT, an Army Program of Record, successfully delivering 12 capabilities within a 1-year period.",
      "Spearheaded a systems engineering effort to build a digital twin of a 20-year program using Model-Based Systems Engineering (MBSE) in Magic Draw, improving communication between engineers and stakeholders.",
      "Routinely worked as a liaison between customers, key stakeholders, and multidisciplinary teams to ensure product development remained relevant and of high quality.",
    ],
  },
  {
    role: "Front End Developer & UX Designer",
    company: "CAE, Inc",
    location: "Orlando, Florida",
    period: "September 2022 - May 2023",
    bullets: [
      "Designed and implemented intuitive and scalable user interfaces for a new geospatial mapping application using Angular, Typescript, and Open Layers.",
      "Developed components and services to work with REST APIs, including GeoServer and .NET, as well as with web sockets using SignalR.",
      "Utilized Git for version control and collaborated with cross-functional teams in a SAFe Agile environment.",
      "Mentored and trained junior developers, improving technical skill and productivity across the team.",
    ],
  },
];

export const PROFILE = {
  name: "Steven Brown",
  title: "Software Engineer | Cloud Architect",
  image: {
    src: "https://pbs.twimg.com/profile_images/1614466022932680705/YK824Gte_400x400.jpg",
    alt: "Steven Brown, Software Engineer",
  },
  bio: "Self-motivated team lead seeking to develop efficient, effective, and innovative solutions to modern problems. Passionate about constructing intuitive interfaces that meet project requirements in less interactions. Proven ability to think critically in fast paced environments.",
  qualifications: [
    "Top Secret / SCI Clearance",
    "AWS Solutions Architect",
    "CompTIA Security+",
    "AGILE / SCRUM Mindset",
    "Excellent Communication",
    "Lifetime Learner",
    "Equal Opportunity Leader",
    "Technical Instructor",
    "English / Russian",
  ],
};

export const ABOUT = {
  title: "About",
  paragraphs: [
    {
      key: "intro",
      delay: 0,
      content: (
        <>
          I am a Software Engineer based in the United States, passionate about
          writing code and developing applications. My journey into tech
          followed a unique path, beginning with a 9-year enlistment as a
          Russian Cryptologic Linguist in the US Army. This experience has
          fueled my unwavering commitment to excel in all aspects of software
          engineering.
        </>
      ),
    },
    {
      key: "skills",
      delay: 0.1,
      content: (
        <>
          My technical proficiency spans both front-end and back-end development
          with a particular emphasis on Javascript libraries and frameworks to
          include React, Angular, and NestJS. I have my AWS Solutions Architect
          and CompTia SEC+ Certifications and work almost daily in the cloud.
          Regarding DevOps, I love building effective CI/CD pipelines using
          Github Actions, Gitlab Runners, and Jenkins to streamline development
          workflows and enhance productivity. In my current role as a Systems
          Engineer and SIGINT/EW Subject Matter Expert (SME) for General
          Dynamics Mission Systems, I bring a Model-Based Systems Engineering
          (MBSE) approach to developing and improving the Army&apos;s
          Intelligence Electronic Warfare Tactical Proficiency Trainer (IEWTPT).
        </>
      ),
    },
    {
      key: "cta",
      delay: 0.2,
      content: (
        <>
          I believe in being part of something bigger than myself, so let&#39;s
          connect! If you are interested in knowing more about my professional
          skills, take a gander at my <Link href="/portfolio">portfolio</Link>,
          or <Link href="/contact">contact</Link> me for my resume. I built this
          site with{" "}
          <motion.span
            className="inline-flex items-center"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.15, 1] }}
          >
            <FaHeart className="text-red-500" />
            <span className="sr-only">love</span>
          </motion.span>{" "}
          using NextJS, Markdown (MDX), and Tailwind CSS. I hope you like it!
        </>
      ),
    },
  ],
};
