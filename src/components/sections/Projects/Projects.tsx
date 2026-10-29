
"use client";

import { useRef, useState } from "react";
import type { FocusEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import useGSAP from "@/hooks/useGSAP";

const SETTINGS = {
  scrollSpeed: 1.3,
  scrub: 0.85,
  inactiveScale: 0.9,
  inactiveOpacity: 0.72,
  maximumRotation: 5,
  maximumDepth: 90,
};

export default function Projects() {
  const pinRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const desktopTriggerRef = useRef<ScrollTrigger | null>(
    null
  );

  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const totalProjects = featuredProjects.length;
  const formattedTotal = String(totalProjects).padStart(
    2,
    "0"
  );

  const goToProject = (index: number) => {
    const trigger = desktopTriggerRef.current;

    if (!trigger || totalProjects < 2) return;

    const safeIndex = Math.max(
      0,
      Math.min(totalProjects - 1, index)
    );

    const progress = safeIndex / (totalProjects - 1);

    const scrollY =
      trigger.start +
      progress * (trigger.end - trigger.start);

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  };

  const handleProjectFocus = (
    event: FocusEvent<HTMLDivElement>
  ) => {
    if (window.innerWidth < 1024) return;

    const card = (
      event.target as HTMLElement
    ).closest<HTMLElement>("[data-project-index]");

    if (!card) return;

    const index = Number(card.dataset.projectIndex);

    if (
      Number.isInteger(index) &&
      index !== activeIndexRef.current
    ) {
      goToProject(index);
    }
  };

  useGSAP(
    () => {
      const pin = pinRef.current;
      const intro = introRef.current;
      const gallery = galleryRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const progressBar = progressRef.current;
      const counter = counterRef.current;

      if (
        !pin ||
        !intro ||
        !gallery ||
        !viewport ||
        !track ||
        !progressBar ||
        !counter
      ) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>(
        track.querySelectorAll("[data-project-index]")
      );

      const media = gsap.matchMedia();

      // Initial section entrance.
      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            [intro, gallery],
            {
              autoAlpha: 0,
              y: 34,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.95,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: pin,
                start: "top 78%",
                once: true,
              },
            }
          );
        }
      );

      // Desktop-only cinematic horizontal gallery.
      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getDistance = () =>
            Math.max(
              0,
              track.scrollWidth - viewport.clientWidth
            );

          const getScrollDistance = () =>
            Math.max(
              1,
              getDistance() * SETTINGS.scrollSpeed
            );

          const setActiveProject = (index: number) => {
            const safeIndex = Math.max(
              0,
              Math.min(totalProjects - 1, index)
            );

            counter.textContent =
              `${String(safeIndex + 1).padStart(2, "0")} / ${formattedTotal}`;

            if (activeIndexRef.current !== safeIndex) {
              activeIndexRef.current = safeIndex;
              setActiveIndex(safeIndex);
            }
          };

          const updateDepth = () => {
            const viewportWidth = viewport.clientWidth;

            if (viewportWidth <= 0) return;

            const viewportBounds =
              viewport.getBoundingClientRect();

            const viewportCenter =
              viewportBounds.left + viewportWidth / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
              const bounds = card.getBoundingClientRect();

              const cardCenter =
                bounds.left + bounds.width / 2;

              const difference =
                cardCenter - viewportCenter;

              const distance = Math.abs(difference);

              if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
              }

              const normalizedDistance = Math.min(
                1,
                distance / viewportWidth
              );

              const scale =
                1 -
                (1 - SETTINGS.inactiveScale) *
                  normalizedDistance;

              const opacity =
                1 -
                (1 - SETTINGS.inactiveOpacity) *
                  normalizedDistance;

              const rotateY =
                -THREE_LIKE_CLAMP(
                  difference / viewportWidth,
                  -1,
                  1
                ) * SETTINGS.maximumRotation;

              const depth =
                -normalizedDistance *
                SETTINGS.maximumDepth;

              gsap.set(card, {
                scale,
                opacity,
                rotationY: rotateY,
                z: depth,
                transformPerspective: 1400,
                transformOrigin: "center center",
              });
            });

            setActiveProject(closestIndex);
          };

          gsap.set(track, {
            x: 0,
            force3D: true,
          });

          gsap.set(cards, {
            transformPerspective: 1400,
            transformOrigin: "center center",
          });

          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end: () => `+=${getScrollDistance()}`,
              pin: true,
              scrub: SETTINGS.scrub,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              onUpdate(self) {
                gsap.set(progressBar, {
                  scaleX: self.progress,
                  transformOrigin: "left center",
                });

                updateDepth();
              },

              onRefresh(self) {
                gsap.set(progressBar, {
                  scaleX: self.progress,
                  transformOrigin: "left center",
                });

                updateDepth();
              },
            },
          });

          desktopTriggerRef.current =
            tween.scrollTrigger ?? null;

          // Update perspective after the horizontal tween
          // has rendered its new position.
          const updateAfterRender = () => {
            updateDepth();
          };

          gsap.ticker.add(updateAfterRender);

          return () => {
            gsap.ticker.remove(updateAfterRender);
            desktopTriggerRef.current = null;

            tween.scrollTrigger?.kill();
            tween.kill();

            gsap.set(cards, {
              clearProps:
                "transform,opacity,transformPerspective,transformOrigin",
            });

            gsap.set(track, {
              clearProps: "transform",
            });
          };
        }
      );

      return () => {
        desktopTriggerRef.current = null;
        media.revert();
      };
    },
    pinRef,
    [totalProjects]
  );

  return (
    <section
      id="projects"
      className="relative bg-[var(--color-background)]"
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
          className="mx-auto w-full max-w-[var(--container-max)] px-[var(--page-gutter)]"
        >
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
              Selected Work
            </span>

            <h2 className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]">
              Selected projects.
              <span className="block text-[var(--color-text-muted)]">
                Designed for impact.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-6 sm:text-lg">
              A closer look at concept websites created
              to showcase clear storytelling, refined
              interfaces, and thoughtful development.
            </p>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="mt-10 w-full sm:mt-12 lg:mt-8"
        >
          <div className="mx-auto max-w-[var(--container-max)] px-[var(--page-gutter)]">
            <div
              ref={viewportRef}
              className="overflow-hidden"
              style={{
                perspective: "1400px",
              }}
            >
              <div
                ref={trackRef}
                onFocusCapture={handleProjectFocus}
                className="
                  flex flex-col gap-6
                  lg:w-max lg:flex-row lg:gap-8
                "
              >
                {featuredProjects.map(
                  (project, index) => (
                    <div
                      key={project.id}
                      data-project-index={index}
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
                  )
                )}
              </div>
            </div>

            <div className="mt-6 hidden items-center gap-5 lg:flex">
              <span className="shrink-0 text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
                Scroll to explore
              </span>

              <div
                aria-hidden="true"
                className="h-px flex-1 overflow-hidden bg-[var(--color-border)]"
              >
                <div
                  ref={progressRef}
                  className="h-full w-full origin-left scale-x-0 bg-[var(--color-accent)]"
                />
              </div>

              <span
                ref={counterRef}
                aria-label="Current project and total projects"
                aria-live="off"
                className="shrink-0 text-xs tabular-nums text-[var(--color-text-muted)]"
              >
                01 / {formattedTotal}
              </span>

              {totalProjects > 1 && (
                <div
                  className="flex shrink-0 gap-2"
                  aria-label="Project navigation"
                >
                  <button
                    type="button"
                    onClick={() =>
                      goToProject(activeIndex - 1)
                    }
                    disabled={activeIndex === 0}
                    aria-label="Previous project"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-background-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft
                      size={18}
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      goToProject(activeIndex + 1)
                    }
                    disabled={
                      activeIndex === totalProjects - 1
                    }
                    aria-label="Next project"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-background-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function THREE_LIKE_CLAMP(
  value: number,
  min: number,
  max: number
) {
  return Math.max(min, Math.min(max, value));
}
