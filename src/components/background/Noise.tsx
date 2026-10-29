export default function Noise() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[-1]
        opacity-[0.035]
      "
      style={{
        backgroundImage:
          "url('/textures/noise.png')",
      }}
    />
  );
}