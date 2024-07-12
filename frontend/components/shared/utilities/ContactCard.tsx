import Button from "@/components/core/Button/Button"
import Image from "next/image"
import profilePic from "../../../public/images/profile_milan.jpg"

import { FaEnvelope, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

const ContactCard = () => {
  return (
    <section className="flex flex-row w-full shadow-inner">
      <div className="flex flex-wrap justify-center w-full py-4 pb-8 md:py-8 bg-zinc-200 dark:bg-zinc-900 h-min">
        <div className="px-8 sm:flex gap-x-5 max-w-7xl md:block lg:inline-flex">
          <figure className="relative z-10 mb-4 shrink-0 profile-wrap">
            <div className="relative w-48 h-48 profile">
              <Image
                src={profilePic}
                fill
                sizes="400px"
                alt="Steven Brown in Milan"
                className="object-cover object-center rounded-md"
              />
              <div className="z-10 w-full h-full transition duration-500 ease-in-out transform border-b opacity-100 bg-zinc-200/30 dark:bg-zinc-700/30 group-hover:opacity-0 border-black/20" />
            </div>
            <figcaption className="sr-only">Steven Brown</figcaption>
          </figure>
          <div className="text-center sm:text-left md:text-center lg:text-left">
            <h2 className="mb-2 heading-hr">Let&apos;s Connect</h2>
            <p className="text-base">
              If you&apos;ve journeyed this deep into my site, you&apos;re
              exactly who I want to connect with—whether it&apos;s about a fresh
              project or just a friendly chat. Feel free to reach out through
              social media or my contact page!
            </p>
            <div className="flex items-center justify-between pr-10">
              <span className="flex justify-center text-xl">
                <a
                  href="https://github.com/stevenbrown125"
                  target="_blank"
                  className="px-4 transition duration-300 ease-in-out delay-150 hover:text-github hover:-translate-y-1 hover:scale-110"
                  rel="noreferrer"
                >
                  <FaGithub />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/stevenbrown125/"
                  target="_blank"
                  className="px-4 transition duration-300 ease-in-out delay-150 hover:text-linkedin hover:-translate-y-1 hover:scale-110"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/Dev4TheWeb"
                  target="_blank"
                  className="px-4 transition duration-300 ease-in-out delay-150 hover:text-twitter hover:-translate-y-1 hover:scale-110"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                  <span className="sr-only">X</span>
                </a>
              </span>
              <div className="flex justify-center my-6">
                <Button slug="/contact">
                  <FaEnvelope className="mr-1" />
                  Send a Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCard
