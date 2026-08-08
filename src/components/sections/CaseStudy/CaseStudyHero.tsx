"use client";

import Image from "next/image";

import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              {project.category}
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-7xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-400">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-neutral-400">
              {project.client && (
                <div>
                  <p className="text-neutral-600">Client</p>
                  <p className="mt-1 text-white">
                    {project.client}
                  </p>
                </div>
              )}

              {project.year && (
                <div>
                  <p className="text-neutral-600">Year</p>
                  <p className="mt-1 text-white">
                    {project.year}
                  </p>
                </div>
              )}

              {project.status && (
                <div>
                  <p className="text-neutral-600">Status</p>
                  <p className="mt-1 text-white">
                    {project.status}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-20 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
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
      </div>
    </section>
  );
}