"use client";

import { useState } from "react";
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

  return (
    <Reveal>
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
        "
      >

        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            w-full
            items-center
            justify-between
            px-6
            py-5
            text-left
          "
        >
          <span
            className="
              text-base
              font-medium
              text-white
            "
          >
            {question}
          </span>


          <ChevronDown
            className={`
              h-5
              w-5
              text-zinc-400
              transition-transform
              duration-300
              ${
                open
                  ? "rotate-180"
                  : ""
              }
            `}
          />

        </button>


        <div
          className={`
            grid
            transition-all
            duration-300
            ${
              open
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }
          `}
        >

          <div className="overflow-hidden">

            <p
              className="
                px-6
                pb-6
                text-sm
                leading-relaxed
                text-zinc-400
              "
            >
              {answer}
            </p>

          </div>

        </div>

      </div>
    </Reveal>
  );
}