import { stats } from "@/data/stats";

export default function HeroStats() {
  return (
    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-[var(--radius-medium)]
            border border-[var(--color-border)]
            bg-[var(--color-background-elevated)]
            p-4 backdrop-blur-xl sm:p-5
            transition-colors
            duration-[var(--duration-normal)]
            hover:border-[var(--color-border-strong)]
            hover:bg-[var(--color-background-hover)]
          "
        >
          <p className="text-base font-semibold leading-tight text-[var(--color-text-primary)] sm:text-lg">
            {stat.value}
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
