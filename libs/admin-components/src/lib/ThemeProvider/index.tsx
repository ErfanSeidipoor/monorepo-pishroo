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

const themeSample = {
  palette: palette["light"],
  shape,
  typography,
  shadows,
  breakpoints,
  // components,
  spacing: 10,
  customShadows,
};

export type CustomTheme = ReturnType<typeof createTheme> & typeof themeSample;

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
    // components,
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
