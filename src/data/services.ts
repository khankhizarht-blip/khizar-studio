import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "web-development",

    title: "Web Development",

    description:
      "High-performance websites built with modern frontend technologies.",

    icon: "Code",

    features: [
      "Next.js Applications",
      "Responsive Design",
      "Performance Optimization",
    ],
  },

  {
    id: "creative-design",

    title: "Creative Design",

    description:
      "Modern interfaces combining premium aesthetics with excellent usability.",

    icon: "Palette",

    features: [
      "UI/UX Design",
      "Design Systems",
      "Interactive Experiences",
    ],
  },

  {
    id: "animation",

    title: "Motion & Animation",

    description:
      "Smooth interactions and animations that create memorable experiences.",

    icon: "Sparkles",

    features: [
      "GSAP Animations",
      "Scroll Effects",
      "Micro Interactions",
    ],
  },
];