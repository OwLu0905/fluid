import DefaultSEO from "@/component/layouts/DefaultSEO";
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

  return (
    <>
      <Head>
        <title>
          {Component.displayName ? `${Component.displayName}` : "NCFD 2023"}
        </title>
        <meta name="description" content="第28屆全國計算流體力學學術研討會" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="流體力學, 研討會, 28屆, 計算流體力學" />
        <link rel="icon" href="favicon.jpg" />
      </Head>
      <DefaultSEO />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default CustomApp;
