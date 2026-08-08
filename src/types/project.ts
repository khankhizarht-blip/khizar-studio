export interface Project {
  id: string;

  title: string;

  description: string;

  category: string;

  image: string;

  technologies: string[];

  featured?: boolean;

  liveUrl?: string;

  githubUrl?: string;

  client?: string;

  year?: string;

  status?: "Completed" | "In Progress";

  alt: string;

  challenge?: string;

  solution?: string;

  results?: string[];

  gallery?: string[];
}