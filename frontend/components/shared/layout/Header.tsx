// /components/shared/layout/Header.tsx
"use client";

import { useSidebar } from "@/providers/SidebarProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { FaBars } from "react-icons/fa6";
import { ImBrightnessContrast } from "react-icons/im";

const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar();
  const { toggleTheme } = useTheme();

  return (
    <nav
      className="
        fixed md:sticky top-0 z-20 w-full
        flex items-center justify-between
        px-4 md:px-12
        h-14
        shadow-lg
        bg-zinc-100/20 dark:bg-zinc-800/40
        text-zinc-900 dark:text-zinc-100
        backdrop-blur-md

      "
    >
      <div className="flex items-center gap-x-4 md:gap-x-8 justify-between md:justify-end w-full">
        {/* Mobile menu */}
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="p-2 -m-2 md:hidden
                     text-zinc-900 dark:text-zinc-100
                     hover:text-primary transition"
        >
          <FaBars className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 -m-2
                     text-zinc-900 dark:text-zinc-100
                     hover:text-primary transition hover:cursor-pointer"
        >
          <ImBrightnessContrast className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
