import { FC } from "react";

import { ThemeProvider as Provider } from "@pishroo/admin-components";

export const ThemeProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <Provider themeMode="light">{children}</Provider>;
};
