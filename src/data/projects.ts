
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "summit-construction",
    title: "Summit Construction",
    description:
      "A commercial construction website concept designed to communicate expertise, showcase project capabilities, and encourage quote requests.",
    category: "Commercial Construction",
    image: "/images/projects/summit-construction.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],
    featured: true,
    client: "Summit Construction",
    year: "2026",
    status: "Completed",
    alt: "Summit Construction commercial construction website concept",
    challenge:
      "Construction companies need to establish credibility quickly. The website concept needed to present services clearly, demonstrate project experience, and make it easy for prospective clients to request a quote.",
    solution:
      "We developed a professional, responsive website concept with strong visual hierarchy, dedicated project presentation, clear service messaging, and prominent enquiry calls to action.",
    results: [
      "Clearer presentation of construction services",
      "Dedicated space to showcase project experience",
      "Responsive layouts for desktop and mobile",
      "Prominent pathways for quote enquiries",
    ],
    gallery: [
      "/images/projects/summit-construction.webp",
    ],
  },
  {
    id: "creative-agency",
    title: "Creative Agency",
    description:
      "A contemporary creative agency website concept combining expressive visuals, refined motion, and a clear presentation of services.",
    category: "Creative Agency",
    image: "/images/projects/creative-agency.webp",
    technologies: [
      "Next.js",
      "Motion",
      "Lenis",
    ],
    featured: true,
    client: "Creative Agency",
    year: "2026",
    status: "Completed",
    alt: "Creative agency website concept featuring modern visual design",
    challenge:
      "The agency needed a distinctive online presence that could communicate its creative approach while keeping navigation intuitive and the browsing experience smooth.",
    solution:
      "We created a visually focused website concept with considered typography, a clear content hierarchy, responsive layouts, and motion designed to support the experience rather than distract from it.",
    results: [
      "Distinctive creative brand presentation",
      "Clearer service and portfolio storytelling",
      "Responsive experience across screen sizes",
      "Purposeful motion and transitions",
    ],
    gallery: [
      "/images/projects/creative-agency.webp",
    ],
  },
];
