
"use client";

import Reveal from "@/components/animations/Reveal";
import { process } from "@/data/process";
import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              How We Work
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-6xl">
              Clear steps.
              <span className="block text-neutral-500">
                Exceptional execution.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-6 sm:text-lg">
              Great websites start with a clear plan. From understanding
              your business to launching your website, every stage has a
              purpose, so you know what comes next and what to expect.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {process.map((step) => (
            <ProcessStep
              key={step.id}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
