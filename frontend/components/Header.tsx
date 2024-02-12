"use client";
import { SidebarContext } from "@/providers/SidebarProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { animated } from '@react-spring/web';
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { ImBrightnessContrast } from "react-icons/im";

const links = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
    {
        title: 'Portfolio',
        href: '/portfolio'
    },
    {
        title: 'Contact',
        href: '/contact'
    }
]

export default function Header() {
    const { toggleSidebar } = useContext(SidebarContext)
    const { toggleTheme } = useTheme()
    return (
        <nav className="flex items-center px-12 shadow-lg gap-x-8 relative">
            <a className="cursor-pointer py-8" onClick={toggleSidebar}><FaBars /></a>
            <a className="cursor-pointer py-8" onClick={toggleTheme} > <ImBrightnessContrast /></a>
            <FaMagnifyingGlass />
        </nav>
    );
};
