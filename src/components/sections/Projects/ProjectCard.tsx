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
  return (
    <Reveal>
      <motion.article
        initial="initial"
        whileHover="hover"
        className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl lg:grid-cols-2"
      >
        <Link
          href={`/projects/${project.id}`}
          className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[520px]"
        >
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.06 },
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
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </Link>

        <div className="flex flex-col justify-center p-8 lg:p-14">
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            {project.client && <span>{project.client}</span>}

            {project.year && <span>{project.year}</span>}

            {project.status && (
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                {project.status}
              </span>
            )}
          </div>

          <Link href={`/projects/${project.id}`}>
            <h3 className="mt-8 text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-4xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-5 leading-relaxed text-neutral-400">
            {project.description}
          </p>

          <div className="mt-8">
            <ProjectTech technologies={project.technologies} />
          </div>

          <div className="mt-10">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
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