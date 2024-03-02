import HexagonCard from "@/components/shared/utilities/HexagonCard"
import Link from "next/link"
import { FaArrowRight, FaLock, FaRegLightbulb } from "react-icons/fa6"
import { IoAccessibility } from "react-icons/io5"
import { SiSpeedtest } from "react-icons/si"

const values = [
  {
    Icon: FaLock,
    title: "Secure",
    text: "Security-first, fortifying applications against vulnerabilities and unauthorized access.",
  },
  {
    Icon: SiSpeedtest,
    title: "Efficient",
    text: "Optimizing code for speed and resource efficiency enhancing application performance.",
  },
  {
    Icon: FaRegLightbulb,
    title: "Intuitive",
    text: "Striving for intuitive design, where users feel immediately at home.",
  },
  {
    Icon: IoAccessibility,
    title: "Accessible",
    text: "Creating experiences that are open and engaging for all users.",
  },
]

const WorkSection = () => {
  return (
    <section className="relative bg-zinc-200 dark:bg-zinc-900 slanted-div">
      <header className="flex px-8 mx-auto max-w-7xl">
        <h2 className="px-12 pt-4 leading-10 heading-hr">My Work</h2>
      </header>
      <div className="grid items-start grid-cols-2 px-8 my-8 gap-y-4 lg:grid-cols-4">
        {values.map((value, i) => (
          <HexagonCard
            Icon={value.Icon}
            title={value.title}
            text={value.text}
            key={`value-${i}`}
          />
        ))}
      </div>
      <div className="flex justify-center pb-6 mt-12">
        <Link
          href="/portfolio"
          className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide border rounded-md shadow-xl gap-x-1 text-primary hover:opacity-90 border-primary hover:dark:bg-primary/30 hover:text-zinc-50"
        >
          View my portfolio <FaArrowRight className="mt-0.5" />
        </Link>
      </div>
    </section>
  )
}

export default WorkSection
