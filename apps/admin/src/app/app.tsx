import { AdminComponents } from "@pishroo/admin-components";
import Test from "@admin/test";

// Providers 
import { ThemeProvider } from "@admin/providers/theme";

// pages
import { Router } from "./pages";


export function App() {
  return (
    <ThemeProvider>
      <AdminComponents />
      <Router />
    </ThemeProvider>
  );
}

export default App;
