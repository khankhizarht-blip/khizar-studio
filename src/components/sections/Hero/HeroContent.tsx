
"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEntrance } from "@/components/providers/EntranceProvider";
import { motionSettings } from "@/design-system";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionSettings.stagger.relaxed,
      delayChildren: motionSettings.delay.short,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: motionSettings.distance.medium,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionSettings.duration.reveal,
      ease: motionSettings.ease.premium,
    },
  },
};

const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionSettings.stagger.relaxed,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    y: "110%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: motionSettings.duration.reveal,
      ease: motionSettings.ease.premium,
    },
  },
};

export default function HeroContent() {
  const reduceMotion = useReducedMotion();
  const { ready } = useEntrance();

  return (
    <motion.div
      className="mx-auto max-w-[860px]"
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={ready ? "visible" : "hidden"}
    >
      <motion.div
        variants={itemVariants}
        className="
          mx-auto inline-flex rounded-full border
          border-[var(--color-border)] bg-[var(--color-background-surface)] px-4 py-2
          text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-secondary)]
          backdrop-blur-xl
        "
      >
        Independent Digital Studio
      </motion.div>

      <motion.h1
        variants={headlineVariants}
        className="
          mt-7 font-semibold leading-[var(--text-hero-leading)] tracking-[var(--text-hero-tracking)]
          text-[length:var(--text-hero-size)] text-[var(--color-text-primary)]
        "
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
            className="
              block bg-gradient-to-r from-[var(--color-text-primary)]
              via-[var(--color-text-secondary)] to-[var(--color-text-muted)]
              bg-clip-text text-transparent
            "
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
        className="
          mx-auto mt-7 max-w-[610px] text-[15px]
          leading-[1.8] text-[var(--color-text-secondary)] sm:text-[17px]
        "
      >
        Independent web design and development for ambitious businesses.
        I build distinctive, fast, easy-to-use websites designed to earn
        trust and turn attention into genuine enquiries.
      </motion.p>
    </motion.div>
  );
}
