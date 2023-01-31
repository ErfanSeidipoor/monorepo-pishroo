import { FC } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = new ApolloClient({
    uri: process.env["NX_BACK_URL"],
    cache: new InMemoryCache(),
  });

  return <Provider client={client}>{children}</Provider>;
};
