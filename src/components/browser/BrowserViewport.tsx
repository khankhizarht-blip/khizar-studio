
import type { ReactNode } from "react";

interface BrowserViewportProps {
  children: ReactNode;
}

export default function BrowserViewport({
  children,
}: BrowserViewportProps) {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden bg-neutral-950"
    >
      <div className="relative min-h-[420px] w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
