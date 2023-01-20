import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import breakpoints from "./breakpoints";
import components from "./components";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import shape from "./shape";
import typography from "./typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export interface IThemeProvider {
  children: React.ReactNode;
  themeMode: "light" | "dark";
}

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
  themeMode,
}) => {
  const themeSample = {
    palette: palette[themeMode],
    shape,
    typography,
    shadows,
    breakpoints,
    components,
    spacing: 10,
    customShadows,
  };

  const theme = createTheme(themeSample);
  theme.components = Object.assign(componentsOverride(theme), components);
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

type PaletteColor = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

type PaletteType = {
  common: { black: string; white: string };
  primary: PaletteColor;
  secondary: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  warning: PaletteColor;
  error: PaletteColor;
  grey: {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  };
  // gradients: GRADIENTS,
  // chart: CHART_COLORS,
  divider: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: { paper: string; default: string; neutral: string };
  action: {
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
  };
};

type CustomShadows = {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  card: string;
  input: string;
};

type Shape = {
  borderRadiusSm: number;
  borderRadius: number;
  borderRadiusMd: number;
};

declare module "@mui/material/styles" {
  export interface Theme {
    palette: PaletteType;
    customShadows: CustomShadows;
    shape: Shape;
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    // palette: PaletteType;
    customShadows: CustomShadows;
    shape: Shape;
  }
  export function createTheme(options?: ThemeOptions): Theme;
}
