import Image from "next/image";
import { FaLinkedin, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";

const author = {
  name: "Steven Brown",
  img: "/images/profile-pic.jpg",
  description:
    "Javascript Enthusiast, Full Stack Developer, Systems & Cloud Architect, Unreal Engine Hobbiest, Investor, Linguist, Dad, Full Sail Alumni, CEO of @bliztek",
  social: {
    twitter: "https://twitter.com/Design4TheWeb",
    linkedin: "https://www.linkedin.com/in/stevenbrown125/",
    github: "https://github.com/stevenbrown125",
  },
};

export default function Bio() {
  return (
    <section
      className="p-4 mx-auto my-4 text-center border shadow-md md:rounded-md max-w-7xl border-neutral-200 bg-neutral-50 opacity-90"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header className="flex flex-col justify-center items-center gap-2">
        <figure className="w-24 h-24 relative">
          <Image
            src={author.img}
            alt={author?.name || ""}
            className="m-2 rounded-full  object-cover"
            itemType="image"
            fill
          />
          <figcaption className="sr-only">{author.name}</figcaption>
        </figure>
        <h2 className="text-2xl" itemType="name">
          {author.name}
        </h2>
        <div className="flex justify-center mb-2 text-2xl gap-x-1">
          <a
            href={author.social.twitter}
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <FaSquareTwitter className="text-[#459ccf]" />
          </a>
          <a
            href={author.social.linkedin}
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <FaLinkedin className="text-[#459ccf]" />
          </a>
          <a
            href={author.social.github}
            target="_blank"
            className="transition duration-300 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
            rel="noreferrer"
          >
            <FaSquareGithub className="text-[#f0842c]" />
          </a>
        </div>
      </header>
      <p
        className="px-4 tracking-wide text-base md:px-12 xl:px-16"
        itemType="description"
      >
        {author?.description || null}
      </p>
      <p className="my-4 text-md lg:text-lg">
        Follow me on Twitter
        <a
          target="_blank"
          rel="noreferrer"
          href={author.social.twitter}
          className="pl-1 border-b border-amber-600 hover:text-amber-600"
        >
          {author.social?.twitter
            ? `@${author.social.twitter.split("https://twitter.com/")[1]}`
            : ""}
        </a>
      </p>
    </section>
  );
}
