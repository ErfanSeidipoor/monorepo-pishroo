import { AdminComponents } from "@pishroo/admin-components";
import Test from "@pishroo/admin/test";
import { ThemeProvider } from "@pishroo/admin/providers/theme";

export function App() {
  return (
    <ThemeProvider>
      <AdminComponents />
      <Test />
    </ThemeProvider>
  );
}

export default App;
