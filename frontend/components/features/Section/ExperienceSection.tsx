// components/features/Section/ExperienceSection.tsx

"use client";

import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import { EXPERIENCE } from "@/content/data";

const EASE_STANDARD: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ExperienceSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-neutral-50 px-4 py-4 shadow-lg dark:bg-neutral-900">
      <header className="mx-auto flex max-w-7xl px-4 sm:px-8">
        <h2 className="heading-hr px-4 sm:px-12 leading-10">My Experience</h2>
      </header>

      <motion.div
        className="pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          visible: {
            transition: prefersReducedMotion ? {} : { staggerChildren: 0.12 },
          },
        }}
      >
        {EXPERIENCE.map((job) => (
          <motion.article
            key={`${job.company}-${job.role}`}
            className="text-center lg:text-left"
            variants={{
              hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 6 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.35,
              ease: EASE_STANDARD,
            }}
          >
            <div className="mx-auto my-2 mt-4 max-w-7xl px-4 sm:px-8 leading-7">
              <h3 className="pb-1 text-neutral-900 dark:text-neutral-100">
                {job.role}
              </h3>

              {/* Stack on mobile, row on desktop */}
              <div className="flex flex-col gap-1 border-b border-neutral-300 pb-2 dark:border-neutral-700 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                <h4 className="text-neutral-700 dark:text-neutral-300">
                  {job.company} | {job.location}
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {job.period}
                </p>
              </div>

              <ul className="list-disc pt-4 pl-4 sm:pl-5 text-neutral-700 dark:text-neutral-300">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="break-words">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center pb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center gap-x-1 rounded-md bg-primary px-4 py-3 font-semibold tracking-wide text-zinc-50 shadow-xl hover:opacity-90"
        >
          <FaEnvelope className="mt-0.5" /> Let&apos;s get in touch
        </Link>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
