import Link from "next/link"

interface ChipProps {
  Icon: React.ElementType
  title: string
  slug: string
}

const Chip: React.FC<ChipProps> = ({ Icon, title, slug }) => {
  return (
    <Link
      href={slug}
      className="inline-flex items-center px-3 py-0.5 mx-1 text-xs font-medium transition-colors duration-200 border-none rounded-full bg-amber-400 text-zinc-800 ring-1 ring-inset ring-primary/10 gap-x-1 underline-none hover:text-zinc-50 hover:bg-primary"
    >
      <Icon className={`h-4 w-4`} />
      {title}
    </Link>
  )
}
export default Chip
