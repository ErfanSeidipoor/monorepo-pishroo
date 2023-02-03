import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "@admin/providers/theme";
import { ApolloProvider } from "@admin/providers/apollo";
import { SnackbarProvider } from "@admin/providers/snackbar";
import { ReduxProvider } from "@admin/providers/redux";

import { Router } from "./pages";

export function App() {
  return (
    <SnackbarProvider>
      <ThemeProvider>
        <HelmetProvider>
          <ApolloProvider>
            <ReduxProvider>
              <Router />
            </ReduxProvider>
          </ApolloProvider>
        </HelmetProvider>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
