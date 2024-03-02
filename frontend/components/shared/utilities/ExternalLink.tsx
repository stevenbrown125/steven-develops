import { FiExternalLink } from "react-icons/fi"

interface ExternalLinkProps {
  href: string
  title: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block mr-4"
    >
      {title}
      <FiExternalLink className="absolute top-0 ml-1 text-sm -right-4" />
    </a>
  )
}
export default ExternalLink
