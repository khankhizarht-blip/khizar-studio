
export const typography = {
  fontFamily: {
    sans: "var(--font-sans)",
    display: "var(--font-display)",
    mono: "var(--font-mono)",
  },

  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    hero: "clamp(3.25rem, 9vw, 8.5rem)",
  },

  lineHeight: {
    tight: 0.95,
    heading: 1.05,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  letterSpacing: {
    tight: "-0.055em",
    heading: "-0.04em",
    normal: "0",
    wide: "0.08em",
  },

  textStyles: {
    hero: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(3.25rem, 9vw, 8.5rem)",
      fontWeight: 600,
      lineHeight: 0.95,
      letterSpacing: "-0.055em",
    },

    heading: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.25rem, 5.5vw, 5rem)",
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.04em",
    },

    body: {
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0",
    },

    eyebrow: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0.08em",
    },
  },
} as const;

export type Typography = typeof typography;
