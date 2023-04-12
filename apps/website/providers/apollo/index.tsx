import { FC } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = new ApolloClient({
    link: createUploadLink({
      uri: process.env["NX_BACK_URL"] + "/graphql",
      credentials: "include",
    }),
    cache: new InMemoryCache({
      dataIdFromObject: (object) => object["id"] as string,
    }),
  });

  return <Provider client={client}>{children}</Provider>;
};

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/pages/_app.js
