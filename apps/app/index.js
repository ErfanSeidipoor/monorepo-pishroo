/**
 * @format
 */

import { AppRegistry } from "react-native";
import Root from "./src/App";
import { name as appName } from "./app.json";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env["NX_BACK_NATIVE_URL"] + "/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
