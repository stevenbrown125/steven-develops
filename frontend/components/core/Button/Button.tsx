import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  slug: string
  children: ReactNode
}
const Button: React.FC<ButtonProps> = ({ slug, children }) => {
  return (
    <Link
      href={slug}
      className="flex items-center justify-center px-4 py-2 font-semibold tracking-wide rounded-md shadow-xl gap-x-1 bg-primary hover:opacity-90 text-zinc-50"
    >
      {children}
    </Link>
  )
}
export default Button
