"use client";

import Image from "next/image";
import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";

interface CaseStudyGalleryProps {
  project: Project;
}

export default function CaseStudyGallery({
  project,
}: CaseStudyGalleryProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Project Gallery
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
            Inside the experience
          </h2>

          <div className="mt-10 grid gap-6">
            {project.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={image}
                  alt={`${project.title} project image ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}