// components/features/Contact/ContactCard.tsx

"use client";

import Button from "@/components/core/Button/Button";
import Image from "next/image";
import profilePic from "../../../public/images/profile_milan.jpg";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "motion/react";

const EASE_STANDARD: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/stevenbrown125",
    label: "GitHub",
    Icon: FaGithub,
    hoverClass: "hover:text-github",
  },
  {
    href: "https://www.linkedin.com/in/stevenbrown125/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    hoverClass: "hover:text-linkedin",
  },
  {
    href: "https://twitter.com/Dev4TheWeb",
    label: "X",
    Icon: FaXTwitter,
    hoverClass: "hover:text-twitter",
  },
];

const ContactCard: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-zinc-200/70 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 mt-4">
      <motion.div
        className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-8 lg:flex-row lg:items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          visible: {
            transition: prefersReducedMotion ? {} : { staggerChildren: 0.12 },
          },
        }}
      >
        {/* Avatar */}
        <motion.figure
          className="shrink-0 mx-auto lg:mx-0 profile-wrap"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.35,
            ease: EASE_STANDARD,
          }}
        >
          <div className="relative w-40 h-40 profile">
            <Image
              src={profilePic}
              fill
              sizes="160px"
              alt="Steven Brown in Milan"
              className="object-cover rounded-md"
            />
          </div>
          <figcaption className="sr-only">Steven Brown</figcaption>
        </motion.figure>

        {/* Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.35,
            ease: EASE_STANDARD,
          }}
        >
          <h2 className="mb-3 heading-hr">Let&apos;s Connect</h2>

          <p className="max-w-2xl mx-auto lg:mx-0 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            If you&apos;ve journeyed this deep into my site, you&apos;re exactly
            who I want to connect with — whether it&apos;s about a fresh project
            or just a friendly chat. Feel free to reach out through social media
            or my contact page.
          </p>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Social links */}
            <motion.span
              className="flex justify-center lg:justify-start gap-6 text-xl"
              variants={{
                visible: {
                  transition: prefersReducedMotion
                    ? {}
                    : { staggerChildren: 0.08 },
                },
              }}
            >
              {SOCIAL_LINKS.map(({ href, label, Icon, hoverClass }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-colors ${hoverClass}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <Icon />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.span>

            {/* CTA */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.3,
                delay: prefersReducedMotion ? 0 : 0.2,
              }}
            >
              <Button slug="/contact">
                <FaEnvelope className="mr-2" />
                Send a Message
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactCard;
