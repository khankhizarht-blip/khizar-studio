import Navbar from "@/components/layout/Navbar";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import {
  CaseStudyHero,
  CaseStudyOverview,
  CaseStudyResults,
  CaseStudyGallery,
} from "@/components/sections/CaseStudy";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Khizar Studio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-black">
        <section className="pt-32 pb-24">
          <CaseStudyHero project={project} />
        </section>

        <section className="py-24">
          <CaseStudyOverview project={project} />
        </section>

        <section className="py-24">
          <CaseStudyResults project={project} />
        </section>

        <section className="py-24 pb-32">
          <CaseStudyGallery project={project} />
        </section>
      </main>
    </>
  );
}