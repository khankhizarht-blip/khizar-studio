import { ArrowRight } from "lucide-react";

export default function DemoWebsite() {
  return (
    <div
      className="
        min-h-[420px]
        bg-gradient-to-b
        from-neutral-900
        to-neutral-950
        p-8
      "
    >

      {/* Navigation */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          pb-5
        "
      >
        <div
          className="
            text-sm
            font-semibold
            text-white
          "
        >
          Summit Construction
        </div>


        <div
          className="
            hidden
            gap-5
            text-xs
            text-zinc-500
            sm:flex
          "
        >
          <span>Projects</span>
          <span>Services</span>
          <span>Contact</span>
        </div>

      </div>


      {/* Hero */}
      <div
        className="
          mt-16
          max-w-xl
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          Commercial Construction
        </p>


        <h2
          className="
            mt-5
            text-4xl
            font-semibold
            leading-tight
            text-white
          "
        >
          Building spaces
          <span
            className="
              text-zinc-500
            "
          >
            {" "}
            that last.
          </span>
        </h2>


        <p
          className="
            mt-5
            text-sm
            leading-relaxed
            text-zinc-400
          "
        >
          A premium construction website built to
          showcase expertise and generate trust.
        </p>


        <button
          className="
            mt-7
            inline-flex
            items-center
            rounded-full
            bg-white
            px-5
            py-2.5
            text-sm
            font-medium
            text-black
          "
        >
          View Projects

          <ArrowRight
            className="
              ml-2
              h-4
              w-4
            "
          />
        </button>

      </div>


      {/* Project Preview Cards */}
      <div
        className="
          mt-14
          grid
          grid-cols-3
          gap-4
        "
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              aspect-video
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
            "
          />
        ))}
      </div>

    </div>
  );
}