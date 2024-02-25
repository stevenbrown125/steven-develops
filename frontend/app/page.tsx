
export default function Home(): JSX.Element {
  return (
    <div className="animate-fade-in-slide-down  relative flex-grow">
      <section className="w-full flex flex-row ">
        <div className="slanted-div h-min flex justify-center w-full">
          <div className="flex gap-x-5 px-4 max-w-2xl">
            <figure className="shrink-0">
              <div className="profile-wrap relative">
                <img src="https://pbs.twimg.com/profile_images/1614466022932680705/YK824Gte_400x400.jpg" className="profile w-auto h-48" />
              </div>
              <figcaption className="sr-only">
                Steven Brown
              </figcaption>
            </figure>
            <div>
              <h1 className="heading-hr">Steven Brown</h1>
              <h3 className="pb-4">Software Engineer | Cloud Architect</h3>
              <p className="text-sm">Self-motivated team lead seeking to develop efficient, effective, and innovative solutions to modern
                problems. Passionate about constructing intuitive interfaces that meet project requirements in less
                interactions. Proven ability to think critically in fast paced environments.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 max-w-7xl mx-auto">
        <h2>My Values</h2>

        <p className="pb-4">
          I&#39;m a Full Stack Javascript developer from the US. Web Design &
          Development is my passion and I love working with Javascript. After
          finishing off 9 years as a Russian Cryptologic Linguist for the US
          Army, I have been on a mission to become an expert in all areas of
          software engineering. On the frontend, I have experience working
          with Angular and React. On the backend, I prefer NestJS and Express,
          but have been recently working more with Go. I have my AWS Solutions
          Architect and CompTia SEC+ Certifications and work almost daily in
          the cloud. I love building effective CI/CD pipelines using Github
          Actions and Jenkins and am constantly looking for ways to improve
          processes. Speaking of processes, I currently work as a Systems
          Engineer and SIGINT/EW SME, subcontracting for General Dynamics
          Mission Systems. For the remainder of this year, I am focused on
          continuing to learn MBSE, C++, Golang, and building more products on
          AWS.
        </p>
        <p className="pb-4">
          In the military, I worked in Signals Intelligence. I recently earned
          my HAM Amateur Radio License and enjoy working on projects that
          connect the EMS world to cloud computing. Oh, I also love to travel
          and make videos so check out my blog to see some of my latest
          adventures!
        </p>

        <p>
          I believe in being part of something bigger than myself, so
          let&#39;s work together! If you are interested in knowing more about
          my professional skills, take a gander at my portfolio, or contact me
          for my resume.
        </p>

        <p>
          I built this site with love using NextJS and Tailwind CSS. I hope
          you like it!
        </p>
      </section>
    </div>
  );
}
