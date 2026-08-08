"use client";

import {
  ReactNode,
} from "react";

import {
  motion,
} from "motion/react";

import {
  useMagnetic,
} from "@/hooks/useMagnetic";

import {
  useReducedMotion,
} from "@/hooks/useReducedMotion";


interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}


export default function Magnetic({
  children,
  strength = 0.25,
  className,
}: MagneticProps) {
  const reducedMotion =
    useReducedMotion();

  const {
    bind,
    x,
    y,
  } = useMagnetic(
    reducedMotion ? 0 : strength
  );


  return (
    <motion.div
      {...bind}
      style={{
        x: reducedMotion ? 0 : x,
        y: reducedMotion ? 0 : y,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}