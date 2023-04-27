import { UserProvider } from "./providers";

import { FC } from "react";
import { Navigation } from "./screens";
import { ApolloProvider } from "./providers/apollo";

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
