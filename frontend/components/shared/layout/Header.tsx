"use client";

import { SidebarContext } from "@/providers/SidebarProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { useContext } from "react";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { ImBrightnessContrast } from "react-icons/im";

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext)
    const { toggleTheme } = useTheme()

    return (
        <nav className="flex items-center px-12 shadow-lg gap-x-8  z-10 fixed top-0 left-0 right-0 md:relative dark:bg-zinc-800">
            <a className="cursor-pointer py-8" onClick={toggleSidebar}><FaBars /></a>
            <a className="cursor-pointer py-8" onClick={toggleTheme} > <ImBrightnessContrast /></a>
            <FaMagnifyingGlass />
        </nav>
    );
};
