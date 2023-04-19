import { ApolloProvider, UserProvider } from "./providers";

import { FC } from "react";
import { Navigation } from "./screens";

export const App: FC = () => {
  return (
    <ApolloProvider>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
