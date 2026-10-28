import HashScroll from "@/components/navigation/HashScroll";
import { Background } from "@/components/background";
import { Footer, Navbar } from "@/components/layout";
import { About } from "@/components/sections";
import {
  Contact,
  FAQ,
  Hero,
  Process,
  Projects,
  Services,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HashScroll />
      <Background />

      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <About />

      <Process />

      <Testimonials />

      <FAQ />

      <Contact />


      <Footer />
    </main>
  );
}