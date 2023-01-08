import styled from "styled-components";
import { AdminComponents } from "@pishroo/admin-components";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <AdminComponents />
      <h1>This is a test</h1>
    </StyledApp>
  );
}

export default App;
