import { siteConfig } from "@/config/site";
import type { Contact } from "@/types/contact";

export const contact: Contact = {
  badge: "Let's Work Together",

  title: "Ready to build your next website?",

  description:
    "Whether you're launching a new business or upgrading an existing one, let's create a fast, modern website that helps you grow.",

  email: siteConfig.email,

  primaryButton: "Start a Project",

  secondaryButton: "Schedule a Call",

  availability: "Available for new projects",
};