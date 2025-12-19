// components/shared/layout/Footer.tsx

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-zinc-200/70 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center gap-3 text-center text-xs text-zinc-700 dark:text-zinc-400 sm:flex-row sm:justify-between sm:text-left">
        <p className="leading-relaxed">
          © {new Date().getFullYear()} Steven Develops. All rights reserved.
        </p>

        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          <Link
            href="/sitemap.xml"
            className="px-2 py-1 rounded-md transition-colors hover:text-primary dark:hover:text-primary-soft"
          >
            Sitemap
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
