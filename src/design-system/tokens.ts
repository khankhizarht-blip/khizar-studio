
export const designTokens = {
  colors: {
    background: "var(--color-background)",
    backgroundElevated: "var(--color-background-elevated)",
    backgroundSurface: "var(--color-background-surface)",
    backgroundHover: "var(--color-background-hover)",

    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    textMuted: "var(--color-text-muted)",

    accent: "var(--color-accent)",
    accentHover: "var(--color-accent-hover)",
    accentForeground: "var(--color-accent-foreground)",

    border: "var(--color-border)",
    borderStrong: "var(--color-border-strong)",

    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
  },

  typography: {
    fontSans: "var(--font-sans)",
    fontDisplay: "var(--font-display)",
    fontMono: "var(--font-mono)",

    weightRegular: 400,
    weightMedium: 500,
    weightSemibold: 600,
    weightBold: 700,
  },

  layout: {
    containerMax: "var(--container-max)",
    containerWide: "var(--container-wide)",
    pageGutter: "var(--page-gutter)",
    sectionSpace: "var(--section-space)",
    sectionSpaceCompact: "var(--section-space-compact)",
  },

  radius: {
    small: "var(--radius-small)",
    medium: "var(--radius-medium)",
    large: "var(--radius-large)",
    extraLarge: "var(--radius-extra-large)",
    pill: "var(--radius-pill)",
  },

  shadows: {
    soft: "var(--shadow-soft)",
    card: "var(--shadow-card)",
    floating: "var(--shadow-floating)",
  },

  motion: {
    fast: "var(--duration-fast)",
    normal: "var(--duration-normal)",
    slow: "var(--duration-slow)",
    reveal: "var(--duration-reveal)",
    stagger: "var(--duration-stagger)",

    ease: "var(--ease-premium)",
    easeInOut: "var(--ease-in-out)",
  },
} as const;

export type DesignTokens = typeof designTokens;
