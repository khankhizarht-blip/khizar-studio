"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}