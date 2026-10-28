
"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

import {
  gsap,
  ScrollTrigger,
  initGSAP,
} from "@/lib/gsap";

import Browser from "@/components/browser/Browser";

const LaptopScene = dynamic(
  () => import("./LaptopScene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-sm text-white/50">
        Loading laptop…
      </div>
    ),
  }
);

export default function BrowserShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onUpdate(self) {
            progressRef.current = self.progress;

            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, {
                scaleX: self.progress,
                transformOrigin: "left center",
              });
            }
          },
          onRefresh(self) {
            progressRef.current = self.progress;

            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, {
                scaleX: self.progress,
                transformOrigin: "left center",
              });
            }
          },
        });

        return () => {
          trigger.kill();
        };
      }
    );

    return () => {
      media.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Scroll-controlled 3D laptop showcase"
      className="relative md:h-[350svh] motion-reduce:md:h-auto"
    >
      <div
        className="
          relative flex min-h-[360px]
          items-center justify-center
          overflow-hidden px-4 py-12
          md:sticky md:top-0
          md:h-[100svh] md:min-h-0
          md:py-0
          motion-reduce:md:relative
          motion-reduce:md:h-auto
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 48%, rgba(55,86,127,0.22), rgba(214,183,128,0.04) 45%, transparent 80%)",
          }}
        />

        <div
          className="
            relative z-10 mx-auto hidden
            h-[min(88svh,850px)]
            w-full max-w-[1300px]
            md:block
            motion-reduce:md:hidden
          "
        >
          <LaptopScene progress={progressRef} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-2xl md:hidden motion-reduce:md:block">
          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <Browser />
          </div>

          <p className="mt-5 text-center text-xs text-white/50">
            Summit Construction — website concept
          </p>
        </div>

        <div
          className="
            absolute bottom-8 left-1/2 z-20
            hidden w-[min(80vw,620px)]
            -translate-x-1/2 items-center gap-5
            md:flex motion-reduce:md:hidden
          "
        >
          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
            Scroll to explore
          </span>

          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
            <div
              ref={progressBarRef}
              className="h-full w-full origin-left scale-x-0 bg-[#d6b780]"
            />
          </div>

          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
            3D experience
          </span>
        </div>
      </div>
    </section>
  );
}
