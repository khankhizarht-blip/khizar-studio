
export default function Grid() {
  return (
    <div
      className="absolute inset-x-0 top-0 h-[1100px] opacity-30"
      style={{
        backgroundImage:
          "linear-gradient(rgba(174, 183, 194, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(174, 183, 194, 0.055) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 48%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 48%, transparent 100%)",
      }}
    />
  );
}
