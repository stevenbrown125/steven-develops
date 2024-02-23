import Image from "next/image";
import { Figure } from "@/types/Figure";

interface FigureProps {
    figure: Figure
}

const ShadedFigure = ({ figure: { href, alt, classes } }: FigureProps) => {
    if (!href) return <></>
    return (
        <figure className={classes}>
            <div>
                <Image
                    src={href}
                    alt={alt}
                    fill
                    className="z-0"
                />
                <div className="bg-zinc-200/80 dark:bg-zinc-700/40 w-full h-full z-10 transition duration-500 ease-in-out transform group-hover:opacity-0 opacity-100 border-b border-black/20" />
            </div>
            <figcaption>
                {alt}
            </figcaption>
        </figure>
    )
}

export default ShadedFigure;