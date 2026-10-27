
"use client";

import { useRef } from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { gsap } from "@/lib/gsap";
import useGSAP from "@/hooks/useGSAP";

export default function Projects() {
  const pinRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const totalProjects = featuredProjects.length;
  const formattedTotal = String(totalProjects).padStart(2, "0");

  useGSAP(
    () => {
      const pin = pinRef.current;
      const intro = introRef.current;
      const gallery = galleryRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      const counter = counterRef.current;

      if (
        !pin ||
        !intro ||
        !gallery ||
        !viewport ||
        !track ||
        !progress ||
        !counter
      ) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            [intro, gallery],
            {
              autoAlpha: 0,
              y: 24,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: pin,
                start: "top 75%",
                once: true,
              },
            }
          );
        }
      );

      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getDistance = () =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);

          const updateIndicators = (progressValue: number) => {
            const activeProject =
              totalProjects === 0
                ? 0
                : Math.min(
                    totalProjects,
                    Math.floor(progressValue * totalProjects) + 1
                  );

            gsap.set(progress, {
              scaleX: progressValue,
            });

            counter.textContent =
              `${String(activeProject).padStart(2, "0")} / ${formattedTotal}`;
          };

          gsap.set(track, { x: 0 });
          updateIndicators(0);

          gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end: () => `+=${Math.max(1, getDistance())}`,
              pin,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                updateIndicators(self.progress);
              },
              onRefresh: (self) => {
                updateIndicators(self.progress);
              },
            },
          });
        }
      );

      return () => media.revert();
    },
    pinRef,
    [totalProjects]
  );

  return (
    <section
      id="projects"
      className="relative bg-neutral-950"
    >
      <div
        ref={pinRef}
        className="
          flex min-h-screen flex-col justify-center
          py-20 sm:py-24
          lg:h-screen lg:min-h-[700px]
          lg:overflow-hidden lg:py-12
        "
      >
        <div
          ref={introRef}
          className="mx-auto w-full max-w-7xl px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Selected Work
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-5xl xl:text-6xl">
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
        </div>

        <div
          ref={galleryRef}
          className="mt-10 w-full sm:mt-12 lg:mt-8"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              ref={viewportRef}
              className="overflow-hidden"
            >
              <div
                ref={trackRef}
                className="
                  flex flex-col gap-6
                  lg:w-max lg:flex-row lg:gap-8
                "
              >
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="
                      w-full
                      lg:w-[78vw] lg:max-w-[1040px]
                      lg:min-w-[760px] lg:shrink-0
                    "
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 hidden items-center gap-5 lg:flex">
              <span className="shrink-0 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Scroll to explore
              </span>

              <div
                aria-hidden="true"
                className="h-px flex-1 overflow-hidden bg-white/10"
              >
                <div
                  ref={progressRef}
                  className="h-full w-full origin-left scale-x-0 bg-white"
                />
              </div>

              <span
                ref={counterRef}
                aria-label="Current project and total projects"
                className="shrink-0 text-xs tabular-nums text-neutral-500"
              >
                01 / {formattedTotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
