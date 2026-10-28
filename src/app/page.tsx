
import { Background } from "@/components/background";
import { Footer, Navbar } from "@/components/layout";

import {
  About,
  Contact,
  FAQ,
  Hero,
  Process,
  Projects,
  Services,
  Testimonials,
} from "@/components/sections";

import ScrollStory from "@/components/sections/ScrollStory/ScrollStory";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Background />

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <ScrollStory />

        <Services />

        <Projects />

        <About />

        <Process />

        <Testimonials />

        <FAQ />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
