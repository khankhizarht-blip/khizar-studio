
export default function Gradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[1100px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 38% at 50% 12%, rgba(37, 57, 79, 0.30) 0%, rgba(20, 34, 51, 0.14) 45%, transparent 100%)",
        }}
      />

      <div
        className="absolute right-[-25%] top-[900px] h-[900px] w-[900px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(214, 183, 128, 0.065) 0%, transparent 68%)",
        }}
      />

      <div
        className="absolute left-[-30%] top-[2100px] h-[1000px] w-[1000px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(54, 81, 112, 0.14) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[650px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 65%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
