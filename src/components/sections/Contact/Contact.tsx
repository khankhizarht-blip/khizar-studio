import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Let&apos;s build a website that makes your business look
              exceptional, earns trust, and turns visitors into customers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
  href="mailto:hello@khizarstudio.com"
  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200"
>
  <Mail className="h-4 w-4" />
  Start a Project
  <ArrowUpRight className="h-4 w-4" />
</a>

<a
  href="#projects"
  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
>
  View Our Work
  <ArrowUpRight className="h-4 w-4" />
</a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}