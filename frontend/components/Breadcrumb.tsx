import Link from "next/link";

interface BreadcrumbLink {
    title: string,
    href: string,
    current?: boolean
}

interface BreadcrumbProps {
    breadcrumbs?: BreadcrumbLink[]
}

export default function Breadcrumbs({ breadcrumbs = [] }: BreadcrumbProps) {
    const homeBreadcrumb = {
        title: 'Home',
        href: '/home',
    }
    breadcrumbs.unshift(homeBreadcrumb);

    return (
        <div className="text-xs dark:text-zinc-400 shadow-inner uppercase">
            <ul className="flex gap-x-1">
                {breadcrumbs.map(({ href, title }, i) => {
                    const isDisabled = i === breadcrumbs.length - 1;
                    return (
                        <li className="breadcrumb-item" key={`breadcrumb-${i}`}>{i > 0 && ' / '}<Link href={href} aria-disabled={isDisabled} tabIndex={isDisabled ? -1 : undefined} className={isDisabled ? 'disabled' : ''}>{title}</Link></li>
                    )
                })}
            </ul>
        </div>
    );
}
