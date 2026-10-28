
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEntrance } from "@/components/providers/EntranceProvider";

import { Button } from "@/components/ui";

export default function HeroActions() {
  const { ready } = useEntrance();
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : {
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: ready ? 1 : 0,
        y: ready ? 0 : 20,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : 0.2,
      }}
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >
      <Link href="/#contact">
        <Button size="lg">
          <Sparkles className="mr-2 h-5 w-5" />
          Let&apos;s Talk About Your Project
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>

      <Link
        href="/#projects"
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-7
          text-sm
          font-medium
          text-zinc-300
          transition
          duration-300
          hover:border-white/20
          hover:bg-white/[0.08]
          hover:text-white
        "
      >
        Explore Our Work
      </Link>
    </motion.div>
  );
}
