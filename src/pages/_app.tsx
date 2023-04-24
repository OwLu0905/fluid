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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <DefaultSEO />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default CustomApp;
