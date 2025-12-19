// components/features/Section/WorkSection.tsx

"use client";

import HexagonCard from "@/components/shared/utilities/HexagonCard";
import Link from "next/link";
import { FaArrowRight, FaLock, FaRegLightbulb } from "react-icons/fa6";
import { IoAccessibility } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";

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
];

const EASE_STANDARD: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const WorkSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-zinc-200 dark:bg-zinc-900 slanted-div">
      <header className="flex px-8 mx-auto max-w-7xl">
        <h2 className="px-12 pt-4 leading-10 heading-hr">My Work</h2>
      </header>

      <motion.div
        className="grid items-start grid-cols-2 px-8 my-8 gap-y-4 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: prefersReducedMotion ? {} : { staggerChildren: 0.06 },
          },
        }}
      >
        {values.map((value, i) => (
          <motion.div
            key={`value-${i}`}
            variants={{
              hidden: { opacity: 0, rotate: prefersReducedMotion ? 0 : -1 },
              visible: { opacity: 1, rotate: 0 },
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.35,
              ease: EASE_STANDARD,
            }}
          >
            <HexagonCard
              Icon={value.Icon}
              title={value.title}
              text={value.text}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center pb-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.3,
          delay: prefersReducedMotion ? 0 : 0.25,
        }}
      >
        <Link
          href="/portfolio"
          className="flex items-center justify-center px-4 py-3 font-semibold tracking-wide border rounded-md shadow-xl gap-x-1 text-primary hover:opacity-90 border-primary hover:dark:bg-primary/30 hover:text-zinc-50"
        >
          View my portfolio
          <motion.span
            initial={{ x: 0 }}
            whileInView={{ x: prefersReducedMotion ? 0 : [0, 4, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_STANDARD }}
          >
            <FaArrowRight className="mt-0.5" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default WorkSection;
