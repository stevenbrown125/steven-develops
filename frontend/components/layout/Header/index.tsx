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
        <nav className="flex items-center px-12 shadow-lg gap-x-8 relative z-10">
            <a className="cursor-pointer py-8" onClick={toggleSidebar}><FaBars /></a>
            <a className="cursor-pointer py-8" onClick={toggleTheme} > <ImBrightnessContrast /></a>
            <FaMagnifyingGlass />
        </nav>
    );
};
