
"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEntrance } from "@/components/providers/EntranceProvider";
import { motionSettings } from "@/design-system";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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
      staggerChildren: 0.14,
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
      className="mx-auto"
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={ready ? "visible" : "hidden"}
    >
      <motion.div
        variants={itemVariants}
        className="
          mx-auto inline-flex rounded-full border
          border-white/10 bg-white/[0.03] px-4 py-2
          text-xs uppercase tracking-[0.3em] text-zinc-400
          backdrop-blur-xl
        "
      >
        Independent Digital Studio
      </motion.div>

      <motion.h1
        variants={headlineVariants}
        className="
          mt-8 text-5xl font-semibold leading-[1.05]
          tracking-tight text-white sm:text-6xl lg:text-7xl
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
              block bg-gradient-to-r from-white
              via-zinc-300 to-zinc-500
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
          mx-auto mt-8 max-w-2xl text-base
          leading-relaxed text-zinc-400 sm:text-lg
        "
      >
        I design and develop premium websites that help
        businesses earn trust, stand out from competitors,
        and turn more visitors into potential customers.
        Every detail is built around performance, clarity,
        and a better user experience.
      </motion.p>
    </motion.div>
  );
}
