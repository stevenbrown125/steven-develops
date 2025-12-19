// components/shared/TagChipset.tsx

import Link from "next/link";

interface Tag {
  title: string;
  href: string;
}

interface TagChipsetProps {
  tags: Tag[];
}

const TagChipset: React.FC<TagChipsetProps> = ({ tags }) => {
  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <li key={tag.href}>
          <Link
            href={tag.href}
            className="
              inline-block
              rounded-full
              border
              border-zinc-300
              dark:border-zinc-600
              px-4
              py-1
              text-sm
              font-medium
              hover:border-primary
              hover:text-primary
              transition-colors
            "
          >
            {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagChipset;
