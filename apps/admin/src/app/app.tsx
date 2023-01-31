import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "@admin/providers/theme";
import { ApolloProvider } from "@admin/providers/apollo";
import { SnackbarProvider } from "@admin/providers/snackbar";

import { Router } from "./pages";

export function App() {
  return (
    <SnackbarProvider>
      <ThemeProvider>
        <HelmetProvider>
          <ApolloProvider>
            <Router />
          </ApolloProvider>
        </HelmetProvider>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
