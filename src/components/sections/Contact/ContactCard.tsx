"use client";

import { Mail, Calendar, ArrowRight } from "lucide-react";
import { SlideUp } from "@/components/animations";
import { Button } from "@/components/ui";
import { contact } from "@/data/contact";

export default function ContactCard() {
  return (
    <SlideUp delay={0.15}>
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-10
          backdrop-blur-xl
        "
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-emerald-500/30
            bg-emerald-500/10
            px-4
            py-2
            text-xs
            font-medium
            text-emerald-400
          "
        >
          {contact.availability}
        </span>

        <p
          className="
            mt-6
            text-sm
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          {contact.badge}
        </p>

        <h2
          className="
            mt-4
            max-w-3xl
            text-4xl
            font-semibold
            tracking-tight
            text-white
            sm:text-5xl
          "
        >
          {contact.title}
        </h2>

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-zinc-400
          "
        >
          {contact.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg">
            <Mail className="mr-2 h-5 w-5" />
            {contact.primaryButton}
          </Button>

          <Button size="lg" variant="secondary">
            <Calendar className="mr-2 h-5 w-5" />
            {contact.secondaryButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          {contact.email}
        </p>
      </div>
    </SlideUp>
  );
}