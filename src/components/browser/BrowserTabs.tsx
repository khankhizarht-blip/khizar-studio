import { Plus } from "lucide-react";


export default function BrowserTabs() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        items-center
        justify-between
        px-4
        py-3
      "
    >
      {/* Window Controls */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <span
          className="
            h-3
            w-3
            rounded-full
            bg-red-400/80
          "
        />

        <span
          className="
            h-3
            w-3
            rounded-full
            bg-yellow-400/80
          "
        />

        <span
          className="
            h-3
            w-3
            rounded-full
            bg-green-400/80
          "
        />
      </div>


      {/* Active Tab */}

      <div
        className="
          flex
          items-center
          gap-3
          rounded-lg
          border
          border-white/10
          bg-white/[0.04]
          px-5
          py-2
          text-xs
          text-zinc-300
        "
      >
        Summit Construction

        <Plus
          aria-hidden="true"
          className="
            h-3.5
            w-3.5
            text-zinc-500
          "
        />
      </div>


      {/* Spacer */}

      <div
        className="w-16"
      />
    </div>
  );
}