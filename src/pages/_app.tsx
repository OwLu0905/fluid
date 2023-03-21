import "@/styles/globals.css";
import type { AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { useRef } from "react";

const Noop: React.ElementType = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>();
  // NOTE : don't need react query
  // if (!queryClientRef.current) {
  //   // queryClientRef.current = new QueryClient()
  // }
  //
  const Layout = (Component as any).Layout || Noop;

  console.log(Component.displayName);
  return (
    <>
      <Head>
        <title>
          {Component.displayName ? `Fluid-${Component.displayName}` : "Fluid"}
        </title>
        <meta name="description" content="conference" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default CustomApp;
