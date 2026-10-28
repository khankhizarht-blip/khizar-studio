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
            rounded-[var(--radius-pill)]
            border
            border-[var(--color-border)]
            bg-[var(--color-background-surface)]
            px-4
            py-2
            text-xs
            font-medium
            tracking-wide
            text-[var(--color-text-secondary)]
            transition
            duration-[var(--duration-normal)]
            group-hover:border-[var(--color-border-strong)]
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
}