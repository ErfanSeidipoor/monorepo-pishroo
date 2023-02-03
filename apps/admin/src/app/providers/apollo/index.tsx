import { FC } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  HttpLink,
} from "@apollo/client";

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env["NX_BACK_URL"] + "/graphql",
      credentials: "include",
    }),
    // uri: process.env["NX_BACK_URL"],
    cache: new InMemoryCache(),
    // credentials: "include",
  });

  return <Provider client={client}>{children}</Provider>;
};
