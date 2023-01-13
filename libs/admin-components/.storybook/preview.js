import { ThemeProvider } from "@pishroo/admin-components";

export const WithMuiTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider themeMode={theme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [WithMuiTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};
