"use client";

import { motion } from "motion/react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Badge */}
      <div
        className="
          mx-auto
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-4
          py-2
          text-xs
          uppercase
          tracking-[0.3em]
          text-zinc-400
          backdrop-blur-xl
        "
      >
        Khizar Studio
      </div>


      {/* Heading */}
      <h1
        className="
          mt-8
          text-5xl
          font-semibold
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        Building digital
        <br />

        <span
          className="
            bg-gradient-to-r
            from-white
            via-zinc-300
            to-zinc-500
            bg-clip-text
            text-transparent
          "
        >
          experiences
        </span>

        <br />

        that grow businesses.
      </h1>


      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-base
          leading-relaxed
          text-zinc-400
          sm:text-lg
        "
      >
        I design and develop premium websites using modern
        technologies, combining exceptional performance,
        beautiful interfaces, and smooth interactions.
      </p>

    </motion.div>
  );
}