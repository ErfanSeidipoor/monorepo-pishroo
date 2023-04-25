import { FC, useEffect } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

// import { createUploadLink } from "apollo-upload-client";

// const client = new ApolloClient({
//   link: createUploadLink({
//     uri: process.env["NX_BACK_NATIVE_URL"] + "/graphql",
//     credentials: "include",
//   }),
//   cache: new InMemoryCache({
//     dataIdFromObject: (object) => object["id"] as string,
//   }),
// });
console.log({
  uri: process.env["NX_BACK_NATIVE_URL"] + "/graphql",
  cache: new InMemoryCache(),
});

const client = new ApolloClient({
  uri: process.env["NX_BACK_NATIVE_URL"] + "/graphql",
  cache: new InMemoryCache(),
});

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
