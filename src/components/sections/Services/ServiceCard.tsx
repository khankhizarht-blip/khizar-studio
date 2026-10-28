
"use client";

import {
  Code,
  Palette,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const serviceIcons = {
  Code,
  Palette,
  Sparkles,
};

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const Icon =
    serviceIcons[service.icon as keyof typeof serviceIcons] ?? Code;

  return (
    <Reveal>
      <article
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-[var(--color-border)]
          bg-[var(--surface-card)]
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[var(--color-border-strong)]
          hover:bg-[var(--surface-card-hover)]
          sm:p-8
        "
      >
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--surface-card)] blur-3xl transition duration-500 group-hover:bg-[var(--surface-glow-hover)]" />

        <div className="relative flex items-center justify-between">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-[var(--color-border)]
              bg-[var(--surface-icon)]
              text-[var(--color-text-primary)]
              transition-colors
              duration-300
              group-hover:bg-[var(--surface-icon-hover)]
            "
          >
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </div>

          <span className="text-xs tracking-widest text-[var(--color-text-muted)]">
            0{index + 1}
          </span>
        </div>

        <h3
          className="
            relative
            mt-7
            text-xl
            font-semibold
            tracking-tight
            text-[var(--color-text-primary)]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            relative
            mt-3
            text-sm
            leading-7
            text-[var(--color-text-secondary)]
          "
        >
          {service.description}
        </p>

        <div className="relative mt-7 flex flex-col gap-2.5">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                justify-between
                gap-3
                rounded-xl
                border
                border-[var(--border-subtle)]
                bg-[var(--surface-feature)]
                px-3.5
                py-3
                text-xs
                text-[var(--color-text-secondary)]
                transition-colors
                duration-300
                group-hover:border-[var(--color-border)]
                group-hover:text-[var(--color-text-secondary)]
              "
            >
              <span>{feature}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-text-muted)]" />
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
