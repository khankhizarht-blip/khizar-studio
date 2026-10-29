export default function HeroContent() {
  return (
    <div className="mx-auto max-w-[860px]">
      <div className="mx-auto inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-background-surface)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-secondary)] backdrop-blur-xl">
        Independent Digital Studio
      </div>
      <h1
        className="mt-7 text-[clamp(3rem,7.1vw,7rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span className="block pb-[0.08em]">Websites built</span>
        <span className="block bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-secondary)] to-[var(--color-text-muted)] bg-clip-text pb-[0.08em] text-transparent">to move business</span>
        <span className="block pb-[0.08em]">forward.</span>
      </h1>
      <p className="mx-auto mt-7 max-w-[610px] text-[15px] leading-[1.8] text-[var(--color-text-secondary)] sm:text-[17px]">
        Independent web design and development for ambitious businesses. I build
        distinctive, fast, easy-to-use websites designed to earn trust and turn
        attention into genuine enquiries.
      </p>
    </div>
  );
}
