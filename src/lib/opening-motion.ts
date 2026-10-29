/** Pure, reversible poses for decoration only. Laptop progress is read, never written. */
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const phase = (p: number, start: number, end: number) => {
  const t = clamp((p - start) / (end - start));
  return t * t * (3 - 2 * t);
};

export function openingPose(heroProgress: number, laptopProgress: number) {
  const push = phase(heroProgress, 0.18, 0.62);
  const align = phase(heroProgress, 0.62, 1);
  // Mirror the protected model's phase boundaries, without controlling its ref.
  const open = phase(laptopProgress, 0.03, 0.35);
  const zoom = phase(laptopProgress, 0.36, 0.55);
  const turn = phase(laptopProgress, 0.63, 0.84);
  const exit = phase(laptopProgress, 0.87, 1);
  const bases = [1, 1, 0.55, 0.4];
  const heights = [40, 0, -190, -240];
  return {
    surfaces: bases.map((opacity, index) => {
      const side = index % 2 ? 1 : -1;
      return {
        x: side * (85 * push - 40 * align + 80 * open + 60 * zoom - 40 * turn - 70 * exit),
        y: heights[index] * align - 35 * push + 25 * open + 40 * zoom - 60 * exit,
        z: 260 * push - 620 * align - 100 * open - 80 * zoom + 70 * turn + 150 * exit,
        rotationY: side * (14 * push - 8 * align + 8 * turn - 6 * exit),
        rotationZ: side * (5 * push - 3 * align + 3 * turn),
        scale: 1 + 0.05 * push - 0.28 * align,
        opacity: opacity * (1 - 0.25 * align) * (1 - 0.35 * open - 0.15 * zoom + 0.08 * turn - 0.15 * exit),
      };
    }),
    grid: {
      scale: 1 + 0.22 * push - 0.08 * align + 0.06 * open + 0.03 * zoom - 0.08 * exit,
      y: 100 * push + 30 * align + 25 * open + 25 * zoom - 20 * exit,
      rotationX: 8 * push - 8 * align,
      rotationZ: -3 * push + 2 * align + 3 * turn,
    },
    light: { x: -60 * push + 40 * align + 40 * open + 20 * zoom - 30 * turn, y: 70 * align },
  };
}
