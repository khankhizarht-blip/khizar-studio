import { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
}

export default function BrowserFrame({
  children,
}: BrowserFrameProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#111]
        shadow-2xl
      "
    >
      {children}
    </div>
  );
}