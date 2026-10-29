
import {
  designTokens,
  typography,
  motionSettings,
} from "@/design-system";

export const theme = {
  ...designTokens,
  typography: {
    ...designTokens.typography,
    ...typography.fontFamily,
    ...typography.weight,
    sizes: typography.size,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    textStyles: typography.textStyles,
  },
  motion: {
    ...designTokens.motion,
    ...motionSettings,
  },
} as const;

export type Theme = typeof theme;

export default theme;
