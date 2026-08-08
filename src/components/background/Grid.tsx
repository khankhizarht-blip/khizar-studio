export default function Grid() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[-2]
        opacity-20
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />
    </div>
  );
}