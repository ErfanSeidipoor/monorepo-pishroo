
// Providers 
import { ThemeProvider } from "@admin/providers/theme";
import { HelmetProvider } from 'react-helmet-async';

// pages
import { Router } from "./pages";

export function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
