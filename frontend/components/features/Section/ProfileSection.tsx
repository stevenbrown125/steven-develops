// components/features/Section/ProfileSection.tsx

"use client";

import { PROFILE } from "@/content/data";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ProfileSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: EASE_OUT };

  return (
    <motion.section
      className="flex w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
    >
      <div className="flex w-full flex-wrap justify-center bg-zinc-200/50 py-4 pb-8 h-min dark:bg-zinc-900 md:py-8">
        <div className="max-w-7xl px-8 sm:flex gap-x-5 md:block lg:inline-flex">
          <motion.figure
            className="shrink-0"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.05 }}
          >
            <div className="profile-wrap relative mb-2">
              <img
                src={PROFILE.image.src}
                alt={PROFILE.image.alt}
                className="profile mx-auto h-56 w-auto"
              />
            </div>
            <figcaption className="sr-only">{PROFILE.name}</figcaption>
          </motion.figure>

          <motion.div
            className="text-center sm:text-left md:text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.12 }}
          >
            <h1 className="heading-hr">{PROFILE.name}</h1>
            <h3 className="pb-4">{PROFILE.title}</h3>

            <p className="text-base">{PROFILE.bio}</p>

            <ul className="qualifications hidden list-disc flex-wrap items-center justify-center gap-2 px-2 pt-4 text-sm lg:flex lg:justify-start">
              {PROFILE.qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <ul className="qualifications flex list-disc flex-wrap items-center justify-center gap-2 px-2 pt-4 text-sm lg:hidden">
          {PROFILE.qualifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default ProfileSection;
