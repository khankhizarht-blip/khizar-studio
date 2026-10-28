"use client";

import Image from "next/image";

import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <section className="py-[var(--section-space)]">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
              {project.category}
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-7xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--color-text-secondary)]">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-[var(--color-text-secondary)]">
              {project.client && (
                <div>
                  <p className="text-[var(--color-text-muted)]">Client</p>
                  <p className="mt-1 text-[var(--color-text-primary)]">
                    {project.client}
                  </p>
                </div>
              )}

              {project.year && (
                <div>
                  <p className="text-[var(--color-text-muted)]">Year</p>
                  <p className="mt-1 text-[var(--color-text-primary)]">
                    {project.year}
                  </p>
                </div>
              )}

              {project.status && (
                <div>
                  <p className="text-[var(--color-text-muted)]">Status</p>
                  <p className="mt-1 text-[var(--color-text-primary)]">
                    {project.status}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-20 aspect-[16/9] overflow-hidden rounded-[var(--radius-extra-large)] border border-[var(--color-border)]">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}