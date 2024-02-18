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
  const { isDragging, bind, width, closeSidebar, isVisible } = useContext(SidebarContext)

  return (
    <animated.div
      {...(bind() as any)}
      className={`z-30 min-h-full fixed bg-center shadow-heavy-right bg-cover bg-gray-800 text-zinc-900 dark:text-white transition ease-in-out duration-300  ${isDragging ? `cursor-grabbing` : `cursor-grab`}`}
      style={{
        backgroundImage: "url('/images/bg-2.jpg')",
        width: width.to(w => `${w}px`),
        touchAction: 'none',
      }
      }
    >
      <div className={`bg-zinc-200/80 dark:bg-zinc-900/60 `}>
        <div className={`h-screen flex flex-col justify-center text-center select-none transition ease-in-out duration-300 ${!isVisible ? 'opacity-0 -translate-x-full translate-y-0' : 'opacity-100 translate-x-0 translate-y-0'}`}>

          <Link href="/" className="group pb-1 mb-4 relative title-link-underline w-max mx-auto" onClick={closeSidebar}>
            <Image
              src={`/images/logo_icon.png`}
              width={200}
              height={250}
              alt="Steven Develops Icon"
              className="h-24 w-20 mx-auto"
            />
            <h1 className="group-hover:text-primary transition-all duration-300 ease-in-out">Steven Develops</h1>
          </Link>

          <p className="select-none text-zinc-800 dark:text-zinc-200 transition ease-in-out duration-300 delay-500 ">All things engineering.</p>
          <p className="select-none text-zinc-700 dark:text-zinc-200 text-sm pb-4 transition ease-in-out duration-300 delay-500"><i>Opinions are my own.</i></p>

          {links.map(link => (
            <Link href={link.href} className="relative font-bold content-link-underline transition-all duration-300 ease-in-out hover:text-primary mb-4 pb-1 w-fit mx-auto" key={`nav-${link.title}`} onClick={closeSidebar}>{link.title}</Link>
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
      </div>
    </animated.div>
  );
};
