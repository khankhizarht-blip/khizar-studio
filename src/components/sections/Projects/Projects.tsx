"use client";

import Reveal from "@/components/animations/Reveal";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Selected Work
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Digital experiences
              <span className="block text-neutral-500">
                built for growth.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Premium websites engineered with modern technology,
              strategic design, and performance-focused development.
            </p>
          </div>
        </Reveal>

        <div className="mt-24 space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}