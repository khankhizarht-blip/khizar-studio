
"use client";

import { motion } from "motion/react";
import { motionSettings } from "@/design-system";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: motionSettings.stagger.normal,
    },
  },
};

const itemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionSettings.duration.normal,
      ease: motionSettings.ease.premium,
    },
  },
};

const headlineVariants = {
  visible: {
    transition: {
      staggerChildren: motionSettings.stagger.tight,
    },
  },
};

const lineVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionSettings.duration.normal,
      ease: motionSettings.ease.premium,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="mx-auto max-w-[860px]"
      variants={containerVariants}
      initial={false}
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="mx-auto inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-background-surface)] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-text-secondary)] backdrop-blur-xl sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
      >
        Independent Digital Studio
      </motion.div>

      <motion.h1
        variants={headlineVariants}
        className="mt-6 font-semibold leading-[var(--text-hero-leading)] tracking-[var(--text-hero-tracking)] text-[length:var(--text-hero-size)] text-[var(--color-text-primary)] sm:mt-7"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span className="block overflow-hidden pb-1">
          <motion.span
            variants={lineVariants}
            className="block"
          >
            Websites built
          </motion.span>
        </span>

        <span className="block overflow-hidden pb-1">
          <motion.span
            variants={lineVariants}
            className="block bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-secondary)] to-[var(--color-text-muted)] bg-clip-text text-transparent"
          >
            to move business
          </motion.span>
        </span>

        <span className="block overflow-hidden pb-1">
          <motion.span
            variants={lineVariants}
            className="block"
          >
            forward.
          </motion.span>
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mx-auto mt-5 max-w-[580px] text-[14px] leading-[1.65] text-[var(--color-text-secondary)] sm:mt-7 sm:text-[17px] sm:leading-[1.8]"
      >
        <span className="sm:hidden">
          I design and build distinctive, fast websites that help
          ambitious businesses earn trust and attract enquiries.
        </span>

        <span className="hidden sm:inline">
          Independent web design and development for ambitious businesses.
          I build distinctive, fast, easy-to-use websites designed to earn
          trust and turn attention into genuine enquiries.
        </span>
      </motion.p>
    </motion.div>
  );
}
