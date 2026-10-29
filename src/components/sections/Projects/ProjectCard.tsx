
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";
import ProjectTech from "./ProjectTech";

interface ProjectCardProps {
  project: Project;
  reveal?: boolean;
  index: number;
}

export default function ProjectCard({
  project,
  index,
  reveal = true,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const caseStudyHref = `/projects/${project.id}`;

  return (
    <Reveal animated={reveal}>
      <motion.article
        initial="initial"
        whileHover={reduceMotion ? undefined : "hover"}
        className="
          group relative grid grid-cols-1 overflow-hidden
          rounded-[var(--radius-extra-large)] border border-[var(--color-border)]
          bg-[var(--color-background-elevated)] backdrop-blur-xl
          transition-[border-color,background-color] duration-500
          hover:border-white/25 hover:bg-[var(--color-background-surface)]
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-10
            rounded-[var(--radius-extra-large)] border border-white/0
            transition-colors duration-500
            group-hover:border-white/[0.06]
          "
        />

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
              hover: { scale: 1.055 },
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
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

          <motion.div
            aria-hidden="true"
            variants={{
              initial: { opacity: 0.25 },
              hover: { opacity: 0.05 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 bg-neutral-950"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/15" />

          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
            <span className="rounded-full border border-[var(--color-border-strong)] bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-white/90 backdrop-blur-md transition-colors duration-500 group-hover:border-white/35 group-hover:bg-black/55">
              {project.category}
            </span>
          </div>

          <motion.div
            variants={{
              initial: { x: 0, y: 0, backgroundColor: "rgba(0,0,0,0.3)" },
              hover: {
                x: 2,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.95)",
              },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              absolute right-5 top-5 flex h-10 w-10
              items-center justify-center rounded-full
              border border-[var(--color-border-strong)] text-white
              backdrop-blur-md
              group-hover:text-black
              sm:right-6 sm:top-6
            "
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </Link>

        <div className="relative z-0 flex flex-col justify-center p-6 sm:p-8 lg:p-8 xl:p-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--color-text-muted)] sm:text-sm">
            {project.client && <span>{project.client}</span>}
            {project.year && <span>{project.year}</span>}

            {project.status && (
              <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:border-[var(--color-border-strong)] group-hover:text-[var(--color-text-secondary)]">
                {project.status}
              </span>
            )}
          </div>

          <Link href={caseStudyHref} className="w-fit">
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-text-secondary)] sm:text-4xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            {project.description}
          </p>

          <div className="mt-6">
            <ProjectTech technologies={project.technologies} />
          </div>

          <div className="mt-7">
            <Link
              href={caseStudyHref}
              style={{ color: "var(--color-accent-foreground)" }}
              className="
                inline-flex items-center gap-2
                rounded-full bg-[var(--color-accent)] px-6 py-3
                text-sm font-medium text-[var(--color-accent-foreground)]
                transition-[background-color,transform] duration-300
                hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--color-accent)]
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
