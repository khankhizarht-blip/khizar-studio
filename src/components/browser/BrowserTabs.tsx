
import { Plus } from "lucide-react";

export default function BrowserTabs() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4"
    >
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 sm:h-3 sm:w-3" />
      </div>

      <div className="flex min-w-0 max-w-[65%] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300 sm:gap-3 sm:px-5">
        <span className="truncate">Summit Construction</span>
        <Plus className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
      </div>

      <div className="w-6 shrink-0 sm:w-16" />
    </div>
  );
}
