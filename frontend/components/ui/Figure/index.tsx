import Image from "next/image";
import { Figure } from "@/types/Figure";

interface FigureProps {
    figure: Figure
}

const Figure = ({ figure: { href, alt, classes } }: FigureProps) => {
    if (!href) return <></>
    return (
        <figure className={classes}>
            <div>
                <Image
                    src={href}
                    alt={alt}
                    fill
                />
            </div>
            <figcaption>
                {alt}
            </figcaption>
        </figure>
    )
}

export default Figure;