import Image from "next/image";
import { Figure } from "@/types/Figure";

interface FigureProps {
    figure: Figure
}

const Figure = ({ figure: { href, alt, classes } }: FigureProps) => {
    if (!href) return <></>
    return (
        <figure className={`${classes} relative z-10 shadow-xl mb-8`}>
            <div className="h-48 md:h-96 flex flex-col w-full relative">
                <Image
                    src={href}
                    alt={alt}
                    fill
                    className="object-cover object-center rounded-md"
                />
                <div className="bg-zinc-200/30 dark:bg-zinc-700/40 w-full h-full z-10 transition duration-500 ease-in-out transform group-hover:opacity-0 opacity-100 border-b border-black/20" />

            </div>
            <figcaption className="px-4 mt-2 absolute right-0 text-xs italic truncate overflow-hidden whitespace-nowrap max-w-full">
                {alt}
            </figcaption>
        </figure>
    )
}

export default Figure;