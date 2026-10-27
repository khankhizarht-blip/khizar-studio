
"use client";

import Reveal from "@/components/animations/Reveal";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Selected Work
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-6xl">
              Thoughtful design.
              <span className="block text-neutral-500">
                Built for business.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-6 sm:text-lg">
              Explore website concepts that combine polished design,
              modern development, and clear customer journeys to help
              businesses present their value online.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 lg:mt-24 lg:space-y-24">
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
