// components/features/Blog/PostFooter.tsx
"use client";

import { FaXTwitter, FaLinkedinIn, FaLink } from "react-icons/fa6";

interface Props {
  slug: string;
  title: string;
}

export default function PostFooter({ slug, title }: Props) {
  const url = `https://stevendevelops.com/blog/post/${slug}`;
  const encodedTitle = encodeURIComponent(title);

  return (
    <footer className="mt-12 border-t border-zinc-300/60 dark:border-zinc-700">
      <section>
        <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800/70 px-6 py-6">
          <h3 className="mb-4 text-sm font-heading font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
            Share this post
          </h3>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                url
              )}&text=${encodedTitle}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-6 items-center gap-2 rounded-md bg-white px-3 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:bg-primary/10 hover:text-primary dark:bg-zinc-700 dark:text-zinc-200 dark:ring-zinc-600 transition-colors"
            >
              <FaXTwitter /> X
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-6 items-center gap-2 rounded-md bg-white px-3 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:bg-primary/10 hover:text-primary dark:bg-zinc-700 dark:text-zinc-200 dark:ring-zinc-600 transition-colors"
            >
              <FaLinkedinIn /> LinkedIn
            </a>

            <button
              onClick={() => navigator.clipboard.writeText(url)}
              className="inline-flex h-6 items-center gap-2 rounded-md bg-white px-3 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:bg-primary/10 hover:text-primary dark:bg-zinc-700 dark:text-zinc-200 dark:ring-zinc-600 transition-colors"
            >
              <FaLink /> Copy link
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
