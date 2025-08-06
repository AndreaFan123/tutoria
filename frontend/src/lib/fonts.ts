// Font configuration and utilities
export const FONTS = {
  MULISH: "Mulish",
  NOTO_SANS_TC: "Noto Sans TC",
} as const;

export const FONT_WEIGHTS = {
  THIN: "100",
  LIGHT: "300",
  NORMAL: "400",
  MEDIUM: "500",
  SEMIBOLD: "600",
  BOLD: "700",
  BLACK: "900",
} as const;

// CSS Variables for fonts
export const FONT_VARIABLES = {
  MULISH: "var(--font-mulish)",
  NOTO_SANS_TC: "var(--font-noto-sans-tc)",
} as const;

// Font family combinations
export const FONT_FAMILIES = {
  PRIMARY: `${FONT_VARIABLES.MULISH}, ${FONT_VARIABLES.NOTO_SANS_TC}, system-ui, sans-serif`,
  CHINESE: `${FONT_VARIABLES.NOTO_SANS_TC}, ${FONT_VARIABLES.MULISH}, system-ui, sans-serif`,
  ENGLISH: `${FONT_VARIABLES.MULISH}, system-ui, sans-serif`,
} as const;

// Utility function to get font family based on language
export const getFontFamily = (locale: string) => {
  switch (locale) {
    case "zh-TW":
    case "zh-CN":
      return FONT_VARIABLES.NOTO_SANS_TC;
    case "en-US":
    case "en":
      return FONT_VARIABLES.MULISH;
    default:
      return FONT_VARIABLES.MULISH;
  }
};

// Utility function to get font CSS class based on language
export const getFontClass = (locale: string) => {
  switch (locale) {
    case "zh-TW":
    case "zh-CN":
      return "font-noto-sans-tc";
    case "en-US":
    case "en":
      return "font-mulish";
    default:
      return "font-mulish";
  }
};
