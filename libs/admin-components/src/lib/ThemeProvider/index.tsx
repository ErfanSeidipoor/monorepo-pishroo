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

export interface IThemeProvider {
  children: React.ReactNode;
  themeMode: "light" | "dark";
}

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
  themeMode,
}) => {
  const theme = createTheme({
    palette: palette[themeMode],
    shape,
    typography,
    shadows,
    breakpoints,
    components,
    spacing: 10,
    // @ts-ignore
    customShadows,
  });
  theme.components = Object.assign(componentsOverride(theme), components);
  return (
    <StyledEngineProvider injectFirst>
      {/* // @ts-ignore */}
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
