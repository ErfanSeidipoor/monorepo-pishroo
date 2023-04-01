import { AppProps } from "next/app";
import LayoutProvider from "@website/layout";
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
}

export default CustomApp;
