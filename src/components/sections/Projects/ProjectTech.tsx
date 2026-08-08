interface ProjectTechProps {
  technologies: string[];
}

export default function ProjectTech({
  technologies,
}: ProjectTechProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-2.5
      "
    >
      {technologies.map((technology) => (
        <span
          key={technology}
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-xs
            font-medium
            tracking-wide
            text-neutral-300
            transition
            duration-300
            group-hover:border-white/20
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
}