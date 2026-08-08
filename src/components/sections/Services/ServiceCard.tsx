"use client";

import Reveal from "@/components/animations/Reveal";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  return (
    <Reveal>
      <article
        className="
          group
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          transition
          duration-500
          hover:-translate-y-2
          hover:border-white/20
          hover:bg-white/[0.05]
        "
      >

        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            text-white
          "
        >
          ✦
        </div>


        {/* Title */}
        <h3
          className="
            mt-6
            text-xl
            font-semibold
            text-white
          "
        >
          {service.title}
        </h3>


        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-zinc-400
          "
        >
          {service.description}
        </p>


        {/* Features */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-2
          "
        >
          {service.features.map((feature) => (
            <div
              key={feature}
              className="
                rounded-lg
                border
                border-white/10
                px-3
                py-2
                text-xs
                text-zinc-400
              "
            >
              {feature}
            </div>
          ))}
        </div>


      </article>
    </Reveal>
  );
}