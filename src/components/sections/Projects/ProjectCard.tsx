
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";
import ProjectTech from "./ProjectTech";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const caseStudyHref = `/projects/${project.id}`;

  return (
    <Reveal>
      <motion.article
        initial="initial"
        whileHover="hover"
        className="
          group grid grid-cols-1 overflow-hidden
          rounded-3xl border border-white/10
          bg-white/[0.03] backdrop-blur-xl
          transition-colors duration-500
          hover:border-white/20
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        <Link
          href={caseStudyHref}
          aria-label={`View ${project.title} case study`}
          className="
            relative block aspect-[16/10]
            overflow-hidden bg-neutral-900
            lg:aspect-auto lg:min-h-[400px]
          "
        >
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.04 },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1023px) 100vw, (max-width: 1600px) 78vw, 1040px"
              className="object-cover"
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
            <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-white/90 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:right-6 sm:top-6">
            <ArrowUpRight size={18} />
          </div>
        </Link>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-8 xl:p-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-500 sm:text-sm">
            {project.client && <span>{project.client}</span>}
            {project.year && <span>{project.year}</span>}

            {project.status && (
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                {project.status}
              </span>
            )}
          </div>

          <Link href={caseStudyHref} className="w-fit">
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-4xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 leading-relaxed text-neutral-400">
            {project.description}
          </p>

          <div className="mt-6">
            <ProjectTech technologies={project.technologies} />
          </div>

          <div className="mt-7">
            <Link
              href={caseStudyHref}
              className="
                inline-flex items-center gap-2
                rounded-full bg-white px-6 py-3
                text-sm font-medium text-black
                transition-colors duration-300
                hover:bg-neutral-200
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              View Case Study
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
