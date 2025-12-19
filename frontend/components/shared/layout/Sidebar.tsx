// /components/shared/layout/Sidebar.tsx
"use client";

import { useSidebar } from "@/providers/SidebarProvider";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaXmark } from "react-icons/fa6";
import logo from "../../../public/images/logo_icon.png";

const links = [
  { title: "Blog", href: "/blog" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

const Sidebar: React.FC = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      <aside
        className="hidden md:block fixed  top-0 z-40 h-screen w-[327px] 2xl:w-[552px] bg-cover bg-center shadow-heavy-right"
        style={{
          left: "max(0px, calc((100vw - 1600px) / 2))",
          backgroundImage: "url('/images/bg-2.jpg')",
        }}
      >
        <div className="h-full bg-zinc-200/80 dark:bg-zinc-900/60">
          <SidebarContent onNavigate={closeSidebar} />
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar}
        />
        <div
          className="relative h-full w-full bg-cover bg-center shadow-heavy-right"
          style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
        >
          <button
            aria-label="Close sidebar"
            onClick={closeSidebar}
            className="absolute right-4 top-4 z-10 rounded-md p-2 text-zinc-800 transition-colors hover:text-primary dark:text-zinc-100"
          >
            <FaXmark className="h-6 w-6" />
          </button>
          <div className="h-full bg-zinc-200/80 dark:bg-zinc-900/60">
            <SidebarContent onNavigate={closeSidebar} />
          </div>
        </div>
      </div>
    </>
  );
};

function SidebarContent({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex h-full select-none flex-col justify-center px-6 text-center">
      <Link
        href="/"
        onClick={onNavigate}
        className="group relative mx-auto mb-4 w-max pb-2 text-zinc-900 hover:text-primary dark:text-zinc-100 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-3 after:-translate-x-1/2 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full"
      >
        <Image
          src={logo}
          alt="Steven Develops Icon"
          className="mx-auto h-24 w-20"
        />
        <h1 className="transition-colors duration-300">Steven Develops</h1>
      </Link>

      <p className="text-zinc-800 dark:text-zinc-200">All things engineering</p>
      <p className="pb-4 text-sm text-zinc-600 dark:text-zinc-200">
        <i>Opinions are my own</i>
      </p>

      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          onClick={onNavigate}
          className="relative mx-auto mb-4 w-fit pb-1 font-bold text-zinc-900 transition-colors hover:text-primary dark:text-zinc-100 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-3 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.title}
        </Link>
      ))}

      <span className="mt-6 flex justify-center gap-6 text-xl">
        <a
          href="https://twitter.com/Dev4TheWeb"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 transition-colors hover:text-twitter dark:text-zinc-200"
        >
          <FaXTwitter />
          <span className="sr-only">X Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com/in/stevenbrown125/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 transition-colors hover:text-linkedin dark:text-zinc-200"
        >
          <FaLinkedinIn />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://github.com/stevenbrown125"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 transition-colors hover:text-github dark:text-zinc-200"
        >
          <FaGithub />
          <span className="sr-only">GitHub</span>
        </a>
      </span>
    </div>
  );
}

export default Sidebar;
