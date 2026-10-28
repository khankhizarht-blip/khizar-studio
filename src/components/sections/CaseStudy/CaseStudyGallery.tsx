"use client";

import Image from "next/image";
import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";

interface CaseStudyGalleryProps {
  project: Project;
}

export default function CaseStudyGallery({
  project,
}: CaseStudyGalleryProps) {
  return (
    <Container>
      <Reveal>
        <div>
          <p className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
            Project Gallery
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
            Inside the experience
          </h2>

          <div className="mt-10 grid gap-6">
            {project.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-extra-large)] border border-[var(--color-border)]"
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
    </Container>
  );
}