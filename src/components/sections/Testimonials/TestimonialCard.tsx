"use client";

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
      <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <p className="text-lg leading-8 text-zinc-300">
          “{testimonial.message}”
        </p>

        <div className="mt-8">
          <p className="font-medium text-white">
            {testimonial.name}
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </article>
    </Reveal>
  );
}