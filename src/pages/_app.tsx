import "@/styles/globals.css";
import type { AppProps } from "next/app";
import App from "next/app";
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
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default CustomApp;
