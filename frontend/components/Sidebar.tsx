"use client";
import { SidebarContext } from "@/providers/SidebarProvider";
import { animated } from '@react-spring/web';
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const links = [

  {
    title: 'Blog',
    href: '/blog'
  },
  {
    title: 'Portfolio',
    href: '/portfolio'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]

export default function Sidebar() {
  const { isDragging, bind, width } = useContext(SidebarContext)

  return (
    <animated.div
      {...(bind() as any)}
      className={`z-30 min-h-full transition ease-in-out duration-300 fixed bg-center shadow-heavy-right bg-cover bg-gray-800 text-zinc-900 dark:text-white ${isDragging ? `cursor-grabbing` : `cursor-grab`}`}
      style={{
        backgroundImage: "url('./images/bg-2.jpg')",
        width: width.to(w => `${w}px`),
        touchAction: 'none',
      }
      }
    >
      <div className="bg-zinc-100/70 dark:bg-zinc-900/60 h-screen flex flex-col justify-center text-center">
        <Link href="/" className="group relative title-link-underline pb-1 mb-4">
          <Image
            src={`./images/logo_icon.png`}
            width={200}
            height={250}
            alt="Steven Develops Icon"
            className="h-24 w-20 mx-auto"
          />
          <h1 className="group-hover:text-primary transition-all duration-300 ease-in-out">Steven Develops</h1>

        </Link>
        <p className="select-none text-zinc-800 dark:text-zinc-200 transition ease-in-out duration-300 delay-300 ">All things engineering.</p>
        <p className="select-none text-zinc-700 dark:text-zinc-200 text-sm pb-4 transition ease-in-out duration-300 delay-300"><i>Opinions are my own.</i></p>

        {links.map(link => (
          <Link href={link.href} className="relative font-bold content-link-underline transition-all duration-300 ease-in-out hover:text-primary mb-4 pb-1" key={`nav-${link.title}`}>{link.title}</Link>
        ))}

        <span className="flex justify-center my-8 text-xl">
          <a
            href="https://twitter.com/Design4TheWeb"
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 hover:text-twitter hover:-translate-y-1 hover:scale-110 px-4"
            rel="noreferrer"
          >
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/stevenbrown125/"
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 hover:text-linkedin hover:-translate-y-1 hover:scale-110 px-4"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/stevenbrown125"
            target="_blank"
            className="transition duration-300 ease-in-out delay-150 hover:text-github hover:-translate-y-1 hover:scale-110 px-4"
            rel="noreferrer"
          >
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
        </span>
      </div>
    </animated.div>
  );
};
