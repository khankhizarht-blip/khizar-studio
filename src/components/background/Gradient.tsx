export default function Gradient() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[-3]
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-[-20%]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.06]
          blur-[120px]
        "
      />
    </div>
  );
}