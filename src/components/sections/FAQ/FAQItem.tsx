
"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import Reveal from "@/components/animations/Reveal";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <Reveal>
      <div
        className="
          group
          overflow-hidden
          rounded-2xl
          border
          border-[var(--color-border)]
          bg-[var(--surface-card)]
          transition-colors
          duration-300
          hover:border-[var(--color-border-strong)]
          hover:bg-[var(--surface-icon)]
        "
      >
        <button
          type="button"
          id={`${answerId}-trigger`}
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => setOpen((current) => !current)}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-5
            px-5
            py-5
            text-left
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-inset
            focus-visible:outline-white/70
            sm:px-6
            sm:py-6
          "
        >
          <span className="text-sm font-medium leading-relaxed text-[var(--color-text-primary)] sm:text-base">
            {question}
          </span>

          <span
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[var(--color-border)]
              text-[var(--color-text-secondary)]
              transition-colors
              duration-300
              group-hover:text-[var(--color-text-primary)]
              ${open ? "bg-[var(--surface-icon-hover)] text-[var(--color-text-primary)]" : ""}
            `}
          >
            <ChevronDown
              aria-hidden="true"
              className={`
                h-4
                w-4
                transition-transform
                duration-300
                ${open ? "rotate-180" : ""}
              `}
            />
          </span>
        </button>

        <div
          id={answerId}
          role="region"
          aria-labelledby={`${answerId}-trigger`}
          aria-hidden={!open}
          className={`
            grid
            transition-[grid-template-rows,opacity]
            duration-300
            ease-out
            ${
              open
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-text-secondary)] sm:px-6 sm:pb-6">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
