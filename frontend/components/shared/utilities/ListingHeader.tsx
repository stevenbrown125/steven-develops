import Link from "next/link"
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa"

interface ListingHeaderProps {
  title: string
  isAscending: boolean
}

const ListingHeader: React.FC<ListingHeaderProps> = ({
  title,
  isAscending,
}) => {
  const sortLinkProps = isAscending
    ? {
        href: "?sort=desc",
        ariaLabel: "Sort descending",
        Icon: FaSortAmountUp,
      }
    : {
        href: "?sort=asc",
        ariaLabel: "Sort ascending",
        Icon: FaSortAmountDown,
      }

  return (
    <h2 className="flex items-center justify-between px-2 heading-hr">
      {title}
      <Link
        href={sortLinkProps.href}
        className="text-base text-zinc-600 dark:text-zinc-200 hover:text-primary dark:hover:text-primary"
        role="button"
        aria-label={sortLinkProps.ariaLabel}
      >
        <sortLinkProps.Icon />
      </Link>
    </h2>
  )
}

export default ListingHeader
