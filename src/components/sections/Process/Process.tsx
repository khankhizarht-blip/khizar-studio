"use client";

import Reveal from "@/components/animations/Reveal";
import { process } from "@/data/process";
import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Process
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              A simple process
              <span className="block text-neutral-500">
                designed for results.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              Every project follows a structured workflow that keeps
              communication clear, development efficient, and the final
              product focused on your business goals.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
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