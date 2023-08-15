import Head from "next/head";
import Layout from "@/components/layout/Layout";

import type { AppProps } from "next/app";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
