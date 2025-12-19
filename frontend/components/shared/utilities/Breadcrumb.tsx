// components/shared/utilities/Breadcrumb.tsx

"use client";

import Link from "next/link";

export interface BreadcrumbLink {
  title: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  breadcrumbs?: BreadcrumbLink[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ breadcrumbs = [] }) => {
  const normalized = [
    { title: "Home", href: "/", current: breadcrumbs.length === 0 },
    ...breadcrumbs.filter(
      (crumb, index, self) =>
        index === self.findIndex((c) => c.href === crumb.href)
    ),
  ];

  return (
    <div className="mb-2 text-xs uppercase text-zinc-400 dark:text-zinc-400">
      <ul className="inline-flex gap-x-1">
        {normalized.map(({ href, title }, i) => {
          const isDisabled = i === normalized.length - 1;
          return (
            <li className="flex gap-x-1 breadcrumb-item" key={href}>
              {i > 0 && " / "}
              <Link
                href={href}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : undefined}
                className={`${
                  isDisabled ? "disabled" : "hover:text-primary/60"
                } font-medium`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
