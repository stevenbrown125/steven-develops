// components/features/Portfolio/ProjectNavCard.tsx

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
  project: Project;
  type: "next" | "previous";
}

const ProjectNavCard: React.FC<Props> = ({ project, type }) => {
  const isNext = type === "next";

  return (
    <Link
      href={`/portfolio/project/${project.slug}`}
      className={`group flex items-center gap-3 rounded-md border border-zinc-300/60 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 px-3 py-3 text-sm transition-all duration-200 ease-out hover:border-primary/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
        isNext ? "md:hover:-translate-x-1" : "md:hover:translate-x-1"
      }`}
    >
      {isNext && (
        <FaArrowLeft className="shrink-0 text-zinc-400 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-primary" />
      )}

      {project.image && (
        <div className="relative hidden h-12 w-16 shrink-0 overflow-hidden rounded-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 sm:block">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      )}

      <div className="min-w-0 flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {isNext ? "Next project" : "Previous project"}
        </span>

        <span className="line-clamp-2 font-medium text-zinc-800 dark:text-zinc-200 transition-colors group-hover:text-primary">
          {project.title}
        </span>
      </div>

      {!isNext && (
        <FaArrowRight className="ml-auto shrink-0 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
      )}
    </Link>
  );
};

export default ProjectNavCard;
