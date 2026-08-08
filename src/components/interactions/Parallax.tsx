"use client";

import {
  ReactNode,
} from "react";

import { motion } from "motion/react";

import { useParallax } from "@/hooks/useParallax";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export default function Parallax({
  children,
  offset = 50,
  className,
}: ParallaxProps) {
  const { y } =
    useParallax(offset);

  return (
    <motion.div
      style={{
        y,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}