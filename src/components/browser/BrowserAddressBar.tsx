import {
  Lock,
} from "lucide-react";


interface BrowserAddressBarProps {
  url: string;
}


export default function BrowserAddressBar({
  url,
}: BrowserAddressBarProps) {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        items-center
        gap-3
        px-4
        pb-3
      "
    >
      <div
        className="
          flex
          flex-1
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-4
          py-2
        "
      >
        <Lock
          className="
            h-3.5
            w-3.5
            text-zinc-500
          "
        />

        <span
          className="
            truncate
            text-xs
            text-zinc-400
          "
        >
          https://www.{url}
        </span>
      </div>
    </div>
  );
}