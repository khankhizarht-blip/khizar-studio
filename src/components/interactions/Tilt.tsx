"use client";

import {
  ReactNode,
  useRef,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import {
  useReducedMotion,
} from "@/hooks/useReducedMotion";


interface TiltProps {
  children: ReactNode;
  className?: string;
}


export default function Tilt({
  children,
  className,
}: TiltProps) {
  const ref =
    useRef<HTMLDivElement | null>(null);

  const reducedMotion =
    useReducedMotion();


  const rotateX =
    useMotionValue(0);

  const rotateY =
    useMotionValue(0);


  const springX =
    useSpring(rotateX, {
      stiffness: 200,
      damping: 20,
    });


  const springY =
    useSpring(rotateY, {
      stiffness: 200,
      damping: 20,
    });


  function handleMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (
      reducedMotion ||
      !ref.current
    ) {
      return;
    }


    const rect =
      ref.current.getBoundingClientRect();


    const x =
      event.clientX - rect.left;


    const y =
      event.clientY - rect.top;


    rotateX.set(
      ((y / rect.height) - 0.5) * -12
    );


    rotateY.set(
      ((x / rect.width) - 0.5) * 12
    );
  }


  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }


  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX:
          reducedMotion
            ? 0
            : springX,

        rotateY:
          reducedMotion
            ? 0
            : springY,

        transformPerspective:
          1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}