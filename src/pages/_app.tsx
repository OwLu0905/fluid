import DefaultSEO from "@/component/layouts/DefaultSEO";
import type { AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { useEffect, useRef } from "react";
import AOS from "aos";
import { Router } from "next/router";
import NProgress from "nprogress";

// ** style
import "@/styles/globals.css";
import "@/styles/nprogress.css";
// NOTE : third party css
import "aos/dist/aos.css";

const Noop: React.ElementType = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>();
  // NOTE : don't need react query
  // if (!queryClientRef.current) {
  //   // queryClientRef.current = new QueryClient()
  // }
  //
  const Layout = (Component as any).Layout || Noop;

  // if (true) {
  //   Router.events.on("routeChangeStart", () => {
  //     NProgress.start();
  //   });
  //   Router.events.on("routeChangeError", () => {
  //     NProgress.done();
  //   });
  //   Router.events.on("routeChangeComplete", () => {
  //     NProgress.done();
  //   });
  // }

  (function progressBarHandler() {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  })();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      // delay: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>
          {Component.displayName ? `${Component.displayName}` : "NCFD 2023"}
        </title>
        <meta name="description" content="第28屆全國計算流體力學學術研討會" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="流體力學, 研討會, 28屆, 計算流體力學" />
        <link rel="icon" sizes="48x48" href="/favicon.ico" />
      </Head>
      <DefaultSEO />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default CustomApp;
