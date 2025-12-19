// components/shared/utilities/ExternalLink.tsx

import { FiExternalLink } from "react-icons/fi";
import { ReactNode } from "react";
import { classNames } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  title,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={classNames(
        "inline-flex items-center gap-1 font-medium transition-colors",
        className
      )}
    >
      <span>{children}</span>
      <FiExternalLink className="text-sm opacity-80" />
    </a>
  );
};

export default ExternalLink;
