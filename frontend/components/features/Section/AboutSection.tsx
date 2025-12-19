// components/features/Section/AboutSection.tsx

"use client";

import { ABOUT } from "@/content/data";
import { motion, useReducedMotion } from "motion/react";

const EASE_TEXT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const textTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: EASE_TEXT };

  return (
    <section className="mb-4 px-4 py-4">
      <header className="mx-auto flex max-w-7xl px-8">
        <h2 className="px-12 leading-10 heading-hr">{ABOUT.title}</h2>
      </header>

      <article className="text-center lg:text-left mx-2">
        <div className="mx-auto my-2 max-w-7xl leading-7">
          {ABOUT.paragraphs.map((p, index) => (
            <motion.p
              key={p.key}
              className={
                index === 0 ? "py-2" : index === 1 ? "pb-4" : undefined
              }
              initial={
                index === 0
                  ? { opacity: 0, lineHeight: "1.9rem" }
                  : { opacity: 0 }
              }
              animate={
                index === 0
                  ? { opacity: 1, lineHeight: "1.75rem" }
                  : { opacity: 1 }
              }
              transition={{
                ...textTransition,
                delay: prefersReducedMotion ? 0 : p.delay,
              }}
            >
              {p.content}
            </motion.p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
