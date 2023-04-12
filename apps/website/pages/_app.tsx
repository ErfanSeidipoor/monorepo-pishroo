import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import LayoutProvider from "@website/layout";
import "./styles.css";
import { useApollo } from "@website/libs/apolloClient";

function CustomApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </ApolloProvider>
    </>
  );
}

export default CustomApp;
