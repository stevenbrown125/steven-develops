import SkillChipset from "@/components/SkillChipset/SkillChipset"
import Link from "next/link"
import { FaEnvelope } from "react-icons/fa6"

const SkillsSection: React.FC = () => {
  return (
    <section className="relative z-10 pb-8 overflow-hidden border-t shadow-inner border-zinc-500/30 dark:bg-zinc-800 bg-zinc-100 isolate h-fit">
      <svg
        className="absolute inset-0 -z-10 h-auto w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width={200}
            height={200}
            x="50%"
            y={0}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={0} className="overflow-visible fill-zinc-600/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
        />
      </svg>
      <header className="flex px-8 mx-auto max-w-7xl">
        <h2 className="px-12 pt-4 mb-4 leading-10 heading-hr">My Skills</h2>
      </header>
      <SkillChipset />
      <div className="flex justify-center pb-6 mt-12">
        <Link
          href="/contact"
          className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide border rounded-md shadow-xl gap-x-1 text-primary hover:opacity-90 border-primary hover:dark:bg-primary/30 hover:text-zinc-50"
        >
          Let&apos;s talk <FaEnvelope className="ml-1" />
        </Link>
      </div>
    </section>
  )
}

export default SkillsSection
