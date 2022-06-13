import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { ReactNode } from "react";

const BaseCompLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);

function MyApp({
  Component,
  pageProps
}: AppProps & {
  Component: NextComponentType<NextPageContext, any, {}> & {
    Layout?: React.FC<{ pageProps: any }>;
  };
}) {
  const Layout = Component.Layout || BaseCompLayout;
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
