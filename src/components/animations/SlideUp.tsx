"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideUp({
  children,
  delay = 0,
  className,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}