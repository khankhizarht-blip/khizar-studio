"use client";

import Reveal from "@/components/animations/Reveal";
import type { ProcessStep as Step } from "@/types/process";

interface ProcessStepProps {
  step: Step;
}

export default function ProcessStep({
  step,
}: ProcessStepProps) {
  return (
    <Reveal>
      <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <span className="text-sm font-medium text-neutral-500">
          {String(step.id).padStart(2, "0")}
        </span>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-5 leading-8 text-neutral-400">
          {step.description}
        </p>
      </article>
    </Reveal>
  );
}