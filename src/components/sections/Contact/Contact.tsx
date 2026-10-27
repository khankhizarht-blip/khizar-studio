
import { ArrowUpRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";

export default function Contact() {
  return (
    <Section id="contact" className="py-24 sm:py-28 lg:py-36">
      <Container>
        <Reveal>
          <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-[100px]" />
              <div className="absolute bottom-0 left-1/2 h-40 w-2/3 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/[0.04] blur-[80px]" />
            </div>

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 sm:text-sm">
              Let&apos;s Work Together
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Your next website
              <span className="block text-zinc-500">
                starts with a conversation.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
              Tell me about your business, your goals, and what you
              want your website to achieve. Let&apos;s explore how
              thoughtful design and development can help.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
              <a
                href="mailto:khankhizarht@gmail.com?subject=Website%20Project%20Enquiry"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-zinc-200
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                <Mail className="h-4 w-4" />
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:border-white/25
                  hover:bg-white/[0.06]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Explore Our Work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-7 text-xs text-zinc-500">
              Have questions first? Send an email and tell me what you need.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}


