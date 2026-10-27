
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Website Development",
    description:
      "Fast, responsive business websites designed to build credibility, communicate your value, and turn visitors into enquiries.",
    icon: "Code",
    features: [
      "Business & Service Websites",
      "Responsive Development",
      "Speed & Performance Optimization",
    ],
  },
  {
    id: "creative-design",
    title: "UI/UX & Creative Design",
    description:
      "Thoughtful layouts and refined visual design that make your business look professional and help customers find what they need.",
    icon: "Palette",
    features: [
      "User-Focused Interface Design",
      "Visual Design Systems",
      "Clear Website Navigation",
    ],
  },
  {
    id: "animation",
    title: "Motion & Interactions",
    description:
      "Purposeful animations and polished interactions that bring your website to life without sacrificing usability or speed.",
    icon: "Sparkles",
    features: [
      "Scroll-Based Animations",
      "Interactive UI Elements",
      "Smooth Transitions & Effects",
    ],
  },
];
