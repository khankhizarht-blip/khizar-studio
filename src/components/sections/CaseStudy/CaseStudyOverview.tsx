"use client";

import type { Project } from "@/types/project";
import Reveal from "@/components/animations/Reveal";

interface CaseStudyOverviewProps {
project: Project;
}

export default function CaseStudyOverview({
project,
}: CaseStudyOverviewProps) {
return ( <section className="py-24 sm:py-32"> <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8"> <Reveal> <div> <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
The Challenge </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
          Understanding the problem
        </h2>

        <p className="mt-6 leading-relaxed text-neutral-400">
          {project.challenge}
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          The Solution
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
          Building the experience
        </h2>

        <p className="mt-6 leading-relaxed text-neutral-400">
          {project.solution}
        </p>
      </div>
    </Reveal>
  </div>
</section>

);
}