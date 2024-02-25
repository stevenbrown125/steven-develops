import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
    children?: ReactNode
    schemaProps?: SchemaProps;
}

interface SchemaProps {
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
}

export const CardLink = ({ href, children, schemaProps }: { href: string, children: ReactNode, schemaProps?: SchemaProps }) => {
    const { itemProp, itemScope, itemType } = schemaProps || {};

    return (
        <Link href={href}
            itemProp={itemProp}
            itemScope={itemScope}
            itemType={itemType}
            className="mx-auto max-w-7xl mt-4 pb-6 bg-zinc-300/40 dark:bg-zinc-700/40 lg:rounded-b-md shadow-xl z-10 relative grow-0 group max-w-full transition duration-300 ease-in-out hover:-translate-y-2">
            {children}
        </Link>)
}

export const Card = ({ children, schemaProps }: CardProps) => {

    if (!children) return <></>
    const { itemProp, itemScope, itemType } = schemaProps || {};

    return (
        <article itemProp={itemProp}
            itemScope={itemScope}
            itemType={itemType}>{children}</article>
    );
}

export const CardHeader = ({ children }: CardProps) => {
    if (!children) return <></>
    return <header className="mb-2">{children}</header>
}

export const CardBody = ({ children }: CardProps) => {
    if (!children) return <></>
    return <section className="px-4 md:px-8">{children}</section>
}

export const CardFooter = ({ children }: CardProps) => {
    if (!children) return <></>
    return <footer>{children}</footer>
}
