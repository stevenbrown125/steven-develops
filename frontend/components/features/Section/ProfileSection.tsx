const ProfileSection = () => {
  return (
    <section className="flex flex-row w-full">
      <div className="flex flex-wrap justify-center w-full py-4 pb-8 md:py-8 bg-zinc-200 dark:bg-zinc-900 h-min">
        <div className="px-8 sm:flex gap-x-5 max-w-7xl md:block lg:inline-flex">
          <figure className="shrink-0 ">
            <div className="relative mb-2 profile-wrap">
              <img
                src="https://pbs.twimg.com/profile_images/1614466022932680705/YK824Gte_400x400.jpg"
                className="w-auto h-56 mx-auto profile "
                alt="Steven Brown, Software Engineer"
              />
            </div>
            <figcaption className="sr-only">Steven Brown</figcaption>
          </figure>
          <div className="text-center sm:text-left md:text-center lg:text-left">
            <h1 className="heading-hr">Steven Brown</h1>
            <h3 className="pb-4">Software Engineer | Cloud Architect</h3>
            <p className="text-base">
              Self-motivated team lead seeking to develop efficient, effective,
              and innovative solutions to modern problems. Passionate about
              constructing intuitive interfaces that meet project requirements
              in less interactions. Proven ability to think critically in fast
              paced environments.
            </p>
            <ul className="flex-wrap items-center justify-center hidden gap-2 px-2 pt-4 text-sm list-disc lg:justify-start qualifications lg:flex ">
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
        <ul className="flex flex-wrap items-center justify-center gap-2 px-2 pt-4 text-sm list-disc lg:justify-start qualifications lg:hidden ">
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
    </section>
  )
}

export default ProfileSection
