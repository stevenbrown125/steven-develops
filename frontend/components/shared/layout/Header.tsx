"use client"

import { SidebarContext } from "@/providers/SidebarProvider"
import { useTheme } from "@/providers/ThemeProvider"
import { useContext } from "react"
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6"
import { ImBrightnessContrast } from "react-icons/im"

export default function Header() {
  const { toggleSidebar } = useContext(SidebarContext)
  const { toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center px-12 shadow-lg gap-x-8 md:relative dark:bg-zinc-800">
      <a className="py-8 cursor-pointer" onClick={toggleSidebar}>
        <FaBars />
      </a>
      <a className="py-8 cursor-pointer" onClick={toggleTheme}>
        {" "}
        <ImBrightnessContrast />
      </a>
      <FaMagnifyingGlass />
    </nav>
  )
}
