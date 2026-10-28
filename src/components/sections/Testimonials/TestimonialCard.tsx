
"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

import Reveal from "@/components/animations/Reveal";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <Reveal>
      <motion.article
        initial="initial"
        whileHover="hover"
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-[var(--color-border)]
          bg-[var(--surface-card)]
          p-7
          backdrop-blur-xl
          transition-colors
          duration-500
          hover:border-[var(--color-border-strong)]
          hover:bg-[var(--surface-card-hover)]
          sm:p-9
        "
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--surface-glow)] blur-3xl transition-colors duration-500 group-hover:bg-[var(--surface-glow-hover)]" />

        <div className="relative flex items-center justify-between">
          <Quote
            size={25}
            strokeWidth={1.5}
            className="text-[var(--color-text-muted)] transition-colors duration-300 group-hover:text-[var(--color-text-secondary)]"
            aria-hidden="true"
          />

          <span className="text-xs tracking-[0.2em] text-[var(--color-text-muted)]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <blockquote className="relative mt-7">
          <p className="text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            “{testimonial.message}”
          </p>
        </blockquote>

        <div className="relative mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="font-medium tracking-tight text-[var(--color-text-primary)]">
            {testimonial.name}
          </p>

          <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>

        <motion.div
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/40"
        />
      </motion.article>
    </Reveal>
  );
}
