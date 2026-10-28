"use client";

import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";

interface CaseStudyResultsProps {
  project: Project;
}

export default function CaseStudyResults({
  project,
}: CaseStudyResultsProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
            The Results
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
            What we achieved
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.results?.map((result, index) => (
              <div
                key={index}
                className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-background-surface)] p-6"
              >
                <span className="text-sm text-[var(--color-text-muted)]">
                  0{index + 1}
                </span>

                <p className="mt-4 text-lg text-[var(--color-text-primary)]">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}