import Image from "next/image"
import { Figure } from "@/types/Figure"

interface FigureProps {
  figure: Figure
}

const Figure = ({ figure: { href, alt, classes } }: FigureProps) => {
  if (!href) return <></>
  return (
    <figure className={`${classes} relative z-10 shadow-xl mb-8 mt-2`}>
      <div className="relative flex flex-col w-full h-48 md:h-96">
        <Image
          src={href}
          alt={alt}
          fill
          className="object-cover object-center rounded-md"
        />
        <div className="z-10 w-full h-full transition duration-500 ease-in-out transform border-b opacity-100 bg-zinc-200/30 dark:bg-zinc-700/40 group-hover:opacity-0 border-black/20" />
      </div>
      <figcaption className="absolute right-0 max-w-full px-4 mt-2 overflow-hidden text-xs italic truncate whitespace-nowrap">
        {alt}
      </figcaption>
    </figure>
  )
}

export default Figure
