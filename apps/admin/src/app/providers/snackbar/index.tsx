import { FC } from "react";
import { SnackbarProvider as Provider } from "notistack";

export const SnackbarProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Provider
      maxSnack={3}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {children}
    </Provider>
  );
};
