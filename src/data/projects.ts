import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "summit-construction",

    title: "Summit Construction",

    description:
      "A premium commercial construction website designed to build trust, showcase projects, and generate qualified leads.",

    category:
      "Commercial Construction",

    image:
      "/images/projects/summit-construction.webp",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

    featured: true,

    client:
      "Summit Construction",

    year:
      "2026",

    status:
      "Completed",

    alt:
      "Summit Construction commercial website showcase",

    challenge:
      "The company needed a modern digital presence that could communicate reliability, showcase completed projects, and convert visitors into qualified enquiries.",

    solution:
      "We created a premium construction website focused on strong visual storytelling, clear service presentation, and conversion-focused user experience.",

    results: [
      "Professional brand positioning",
      "Improved project presentation",
      "Better user engagement",
      "Lead-focused website structure",
    ],

    gallery: [
      "/images/projects/summit-construction.webp",
    ],
  },

  {
    id: "creative-agency",

    title:
      "Creative Agency",

    description:
      "A modern agency website focused on immersive interactions and strong visual storytelling.",

    category:
      "Agency",

    image:
      "/images/projects/creative-agency.webp",

    technologies: [
      "Next.js",
      "Motion",
      "Lenis",
    ],

    featured: true,

    client:
      "Creative Agency",

    year:
      "2026",

    status:
      "Completed",

    alt:
      "Creative agency modern website showcase",

    challenge:
      "The agency needed a digital experience that reflected creativity while maintaining speed and usability.",

    solution:
      "We designed an interactive website using modern animations, smooth transitions, and a strong visual hierarchy.",

    results: [
      "Premium brand presentation",
      "Smooth interactive experience",
      "Modern responsive design",
    ],

    gallery: [
      "/images/projects/creative-agency.webp",
    ],
  },
];