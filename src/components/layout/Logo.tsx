import Link from "next/link";
import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Khizar Studio Home"
      className={cn(
        "inline-flex items-center gap-3 font-semibold tracking-tight transition-opacity duration-300 hover:opacity-80",
        className
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg font-bold">
        K
      </span>

      <div className="flex flex-col leading-none">
        <span className="text-base font-semibold text-white">
          Khizar Studio
        </span>

        <span className="text-xs tracking-[0.2em] uppercase text-zinc-400">
          Frontend Developer
        </span>
      </div>
    </Link>
  );
}