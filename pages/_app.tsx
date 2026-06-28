import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
