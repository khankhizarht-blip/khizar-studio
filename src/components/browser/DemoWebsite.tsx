
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Commercial Spaces",
    type: "Commercial Development",
    style: "from-stone-700/80 via-neutral-800 to-neutral-950",
  },
  {
    number: "02",
    title: "Built to Perform",
    type: "Industrial Construction",
    style: "from-zinc-600/70 via-zinc-800 to-neutral-950",
  },
  {
    number: "03",
    title: "Lasting Foundations",
    type: "Structural Excellence",
    style: "from-neutral-700 via-neutral-800 to-neutral-950",
  },
];

export default function DemoWebsite() {
  return (
    <div className="min-h-[420px] overflow-hidden bg-neutral-950 p-5 sm:p-8">
      <nav className="flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06]">
            <span className="text-xs font-bold text-white">S</span>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-white">
              SUMMIT
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-zinc-500">
              Construction Group
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-5 text-[10px] text-zinc-400 sm:flex">
          <span>Projects</span>
          <span>Expertise</span>
          <span>About</span>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-[10px] font-medium text-white">
          Get in touch
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </nav>

      <section className="relative py-12 sm:py-16">
        <div className="pointer-events-none absolute right-0 top-10 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />

        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
          <span className="h-px w-6 bg-zinc-500" />
          Commercial Construction
        </p>

        <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
          Built with purpose.
          <br />
          <span className="text-zinc-500">Made to last.</span>
        </h2>

        <p className="mt-5 max-w-sm text-xs leading-relaxed text-zinc-400 sm:text-sm">
          From ambitious plans to enduring spaces, we bring precision,
          expertise, and craftsmanship to every project.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black">
            Explore our work
            <ArrowRight className="h-3.5 w-3.5" />
          </span>

          <span className="text-xs text-zinc-400">
            Our capabilities
          </span>
        </div>
      </section>

      <section className="border-t border-white/10 pt-5">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
              Selected work
            </p>
            <h3 className="mt-1 text-sm font-medium text-white">
              Projects built for the future
            </h3>
          </div>

          <span className="text-[10px] text-zinc-500">
            01 — 03
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="min-w-0">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.style}`}
              >
                <div className="absolute inset-3 rounded-lg border border-white/10" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {project.number}
                  </p>
                  <div className="mt-2 h-px w-8 bg-white/50" />
                  <p className="mt-2 text-xs font-medium text-white">
                    {project.title}
                  </p>
                </div>

                <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-white/60" />
              </div>

              <p className="mt-2 text-[10px] text-zinc-500">
                {project.type}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
