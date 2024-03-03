import Link from "next/link"

export interface BreadcrumbLink {
  title: string
  href: string
  current?: boolean
}

interface BreadcrumbProps {
  breadcrumbs?: BreadcrumbLink[]
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ breadcrumbs = [] }) => {
  const homeBreadcrumb = {
    title: "Home",
    href: "/",
    current: breadcrumbs.length === 0,
  }
  breadcrumbs.unshift(homeBreadcrumb)

  return (
    <div className="mb-2 text-xs uppercase text-zinc-400 dark:text-zinc-400">
      <ul className="inline-flex gap-x-1">
        {breadcrumbs.map(({ href, title }, i) => {
          const isDisabled = i === breadcrumbs.length - 1
          return (
            <li
              className="flex gap-x-1 breadcrumb-item"
              key={`breadcrumb-${i}`}
            >
              {i > 0 && " / "}
              <Link
                href={href}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : undefined}
                className={`${isDisabled ? "disabled" : "hover:text-primary/60"} font-medium`}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumbs
