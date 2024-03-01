import HexagonCard from "@/components/shared/utilities/HexagonCard"
import { FaArrowRight, FaLock, FaRegLightbulb } from "react-icons/fa6"
import { SiSpeedtest } from "react-icons/si"
import { IoAccessibility } from "react-icons/io5"
import Link from "next/link"

const values = [
  {
    Icon: FaLock,
    title: "Secure",
    text: "Security-first, fortifying applications against vulnerabilities and unauthorized access.",
  },
  {
    Icon: SiSpeedtest,
    title: "Efficient",
    text: "Optimizing code for speed and resource efficiency enhancing application performance.",
  },
  {
    Icon: FaRegLightbulb,
    title: "Intuitive",
    text: "Striving for intuitive design, where users feel immediately at home.",
  },
  {
    Icon: IoAccessibility,
    title: "Accessible",
    text: "Creating experiences that are open and engaging for all users.",
  },
]

export default function Home(): JSX.Element {
  return (
    <div className="relative flex-grow animate-fade-in-slide-down">
      <section className="flex flex-row w-full ">
        <div className="flex justify-center w-full py-8 bg-zinc-200 dark:bg-zinc-900 px-h-min">
          <div className="flex px-8 gap-x-5 max-w-7xl">
            <figure className="shrink-0">
              <div className="relative profile-wrap">
                <img
                  src="https://pbs.twimg.com/profile_images/1614466022932680705/YK824Gte_400x400.jpg"
                  className="w-auto h-56 profile"
                  alt="Steven Brown, Software Engineer"
                />
              </div>
              <figcaption className="sr-only">Steven Brown</figcaption>
            </figure>
            <div>
              <h1 className="heading-hr">Steven Brown</h1>
              <h3 className="pb-4">Software Engineer | Cloud Architect</h3>
              <p className="text-base">
                Self-motivated team lead seeking to develop efficient,
                effective, and innovative solutions to modern problems.
                Passionate about constructing intuitive interfaces that meet
                project requirements in less interactions. Proven ability to
                think critically in fast paced environments.
              </p>
              <ul className="flex flex-wrap items-center gap-2 px-2 pt-4 text-sm list-disc">
                <li>Top Secret / SCI Clearance</li>
                <li>AWS Solutions Architect</li>
                <li>CompTIA Security+</li>
                <li>AGILE / SCRUM Mindset</li>
                <li>Excellent Communication</li>
                <li>Lifetime Learner</li>
                <li>Equal Opportunity Leader</li>
                <li>Technical Instructor</li>
                <li>English / Russian</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 mb-4">
        <header className="flex px-8 mx-auto max-w-7xl">
          <h2 className="px-12 leading-10 heading-hr">About</h2>
        </header>
        <article className="">
          <div className="px-8 mx-auto my-2 max-w-7xl">
            <p className="py-2">
              I&#39;m a Software Engineer based in the US. Writing code and
              architecting applications is my passion. My journey into the tech
              industry followed a distinctive path, beginning with a 9-year
              enlistment as a Russian Cryptologic Linguist for the US Army. My
              experiences instilled in me a relentless drive for expertise
              across the software engineering spectrum.
            </p>{" "}
            <p className="pb-4">
              My technical proficiency spans both front-end and back-end
              development with a particular emphasis on Javascript libraries and
              frameworks including React, Angular, and NestJS. I have my AWS
              Solutions Architect and CompTia SEC+ Certifications and work
              almost daily in the cloud.
            </p>{" "}
            <p className="pb-4">
              Regarding DevOps, I love building effective CI/CD pipelines using
              Github Actions and Jenkins to streamline development workflows and
              enhance productivity. In my current role as a Systems Engineer and
              SIGINT/EW Subject Matter Expert (SME) for General Dynamics Mission
              Systems, I bring a systemic approach to improving operational
              processes employing a Model-Based Systems Engineering (MBSE)
              approach.
            </p>
            <p className="pb-4">
              I believe in being part of something bigger than myself, so
              let&#39;s connect! If you are interested in knowing more about my
              professional skills, take a gander at my portfolio, or contact me
              for my resume.
            </p>
            <p>
              I built this site with love using NextJS and Tailwind CSS. I hope
              you like it!
            </p>
          </div>
        </article>
      </section>
      <section className="relative bg-zinc-200 dark:bg-zinc-900 slanted-div">
        <header className="flex px-8 mx-auto max-w-7xl">
          <h2 className="px-12 pt-4 leading-10 heading-hr">My Work</h2>
        </header>
        <div className="grid items-start grid-cols-4 my-8">
          {values.map((value, i) => (
            <HexagonCard
              Icon={value.Icon}
              title={value.title}
              text={value.text}
              key={`value-${i}`}
            />
          ))}
        </div>
        <div className="flex justify-center pb-6 mt-12">
          <Link
            href="/portfolio"
            className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide rounded-md shadow-xl gap-x-1 bg-primary hover:opacity-90 text-zinc-50"
          >
            View my portfolio <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className=" bg-zinc-800">
        <header className="flex px-8 mx-auto max-w-7xl ">
          <h2 className="px-12 leading-10 heading-hr">My Blog</h2>
        </header>
        <p>Lorem</p>
      </section>
      <section className="bg-zinc-900">
        <header className="flex px-8 mx-auto max-w-7xl">
          <h2 className="px-12 pt-4 leading-10 heading-hr">My Skills</h2>
        </header>
      </section>
    </div>
  )
}
