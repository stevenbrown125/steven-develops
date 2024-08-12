import Link from "next/link"
import { FaEnvelope } from "react-icons/fa"

const ExperienceSection: React.FC = () => {
  return (
    <section className="px-4 py-4  bg-neutral-900 shadow-lg">
      <header className="flex px-8 mx-auto max-w-7xl">
        <h2 className="px-12 leading-10 heading-hr">My Experience</h2>
      </header>
      <article className="text-center lg:text-left pt-4">
        <div className="px-8 mx-auto my-2 leading-7 max-w-7xl mt-4">
          <h3 className="pb-1">
            System Engineer / SIGINT &amp; EW Subject Matter Expert
          </h3>
          <div className="flex justify-between pb-2 border-b border-neutral-300 px-4">
            <h4>AIT Engineering | Orlando, Florida</h4>
            <p className="text-neutral-300">May 2023 - Present</p>
          </div>
          <ul className="list-disc pl-5 pt-4">
            <li>
              Served as a Feature Owner for high-visibility features in an agile
              environment for IEWTPT, an Army Program of Record, successfully
              delivering 12 capabilities within a 1-year period.
            </li>

            <li>
              Spearheaded a systems engineering effort to build a digital twin
              of a 20-year program using Model-Based Systems Engineering (MBSE)
              in Magic Draw, improving communication between engineers and
              stakeholders.
            </li>
            <li>
              Routinely worked as a liaison between customers, key stakeholders,
              and multidisciplinary teams to ensure product development remained
              relevant and of high quality.
            </li>
          </ul>
        </div>
      </article>
      <article className="text-center lg:text-left pt-4">
        <div className="px-8 mx-auto my-2 leading-7 max-w-7xl mt-4">
          <h3 className="pb-1">Front End Developer &amp; UX Designer</h3>
          <div className="flex justify-between pb-2 border-b border-neutral-300 px-4">
            <h4>CAE, Inc | Orlando, Florida</h4>
            <p className="text-neutral-300">September 2022 - May 2023</p>
          </div>
          <ul className="list-disc pl-5 pt-4">
            <li>
              Designed and implemented intuitive and scalable user interfaces
              for a new geospatial mapping application using Angular,
              Typescript, and Open Layers.
            </li>
            <li>
              Developed components and services to work with REST APIs,
              including GeoServer, and .NET, as well as with web sockets using
              SignalR, resulting in fluid real-time data visualization
              capabilities.
            </li>
            <li>
              Utilized Git for version control and collaborated with
              cross-functional teams including back-end developers and other
              designers in a SAFe Agile environment.
            </li>
            <li>
              Mentored and trained junior developers, providing guidance on best
              practices and industry standards, resulting in improved technical
              skills and productivity within the team.
            </li>
          </ul>
        </div>
      </article>
      <div className="flex justify-center pb-6 mt-12">
        <Link
          href="/contact"
          className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide rounded-md shadow-xl gap-x-1 bg-primary hover:opacity-90 text-zinc-50"
        >
          <FaEnvelope className="mt-0.5" /> Let&apos;s get in touch
        </Link>
      </div>
    </section>
  )
}

export default ExperienceSection
