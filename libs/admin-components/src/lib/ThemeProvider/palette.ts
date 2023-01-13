import { alpha } from "@mui/material/styles";

import {
  Palette,
  Theme as MuiITheme,
  PaletteColor,
} from "@mui/material/styles";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  interface Theme extends MuiITheme {
    darker: string;
    palette: {
      primary: {
        darker: string;
      } & PaletteColor;
    } & Palette;
  }
}

// ----------------------------------------------------------------------

function createGradient(color1: any, color2: any) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#F2F2F7", //
  50: "#DFE0EB", //
  100: "#D2DEEA", //
  200: "#D1D1D6", //
  300: "#C7C7CC", //
  400: "#AEAEB2", //
  500: "#8E8E93", //
  600: "#627282", //
  700: "#E5E5EA", //
  800: "#2C3E50", //
  900: "#F9F9F9", //
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#D2DEEA", //
  light: "#FF9500", //
  main: "#1976D2", //
  dark: "#2C3E50", //
  darker: "#2C3E50",
  contrastText: "#586775", //
};

const SECONDARY = {
  lighter: "#262626",
  light: "#EFEFF4", //
  main: "#007AFF", //
  dark: "#2C3E50", //
  darker: "#cca300",
  contrastText: "#E1E1E6", //
};

const INFO = {
  lighter: "#5AC8FA", //
  light: "#EFF0F6", //
  main: "#007AFF", //
  dark: "#F2F2F7", //
  darker: "#230077",
  contrastText: "#5AC8FA", //
};
const SUCCESS = {
  lighter: "#FFD60A", //
  light: "#32D74B", //
  main: "#34C759",
  dark: "#00b74a",
  darker: "#006629",
  contrastText: "#5856D6", //
};
const WARNING = {
  lighter: "#fff8cc",
  light: "#FFD60A", //
  main: "#ffe212",
  dark: "#c6a500",
  darker: "#7c6a00",
  contrastText: "#D6D7E3", //
};
const ERROR = {
  lighter: "#ffdbd7",
  light: "#ff9c92",
  main: "#FF2D55", //
  dark: "#FF3B30", //
  darker: "#990e00",
  contrastText: "#E9E9EB", //
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
      error: ERROR.dark,
      errorSecondary: ERROR.main,
      light: GREY[100],
      lighter: GREY[500],
      dark: "#2B3674",
      info: "#007AFF",
      success: SUCCESS.main,
      darker: "#FF9500",
    },
    background: { paper: "#eeeeee", default: "#fff", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
      inputBackground: "#F4F6F8",
    },
  },
  dark: {
    ...COMMON,
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
      error: ERROR.dark,
      errorSecondary: ERROR.main,
      light: GREY[100],
      lighter: GREY[500],
      dark: "#2B3674",
      info: "#007AFF",
      success: SUCCESS.main,
      darker: "#FF9500",
    },
    background: { paper: "#000", default: "#000", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
      inputBackground: "#F4F6F8",
    },
  },
};

export default palette;
