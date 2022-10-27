import "../styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/godubai.jpg" />
      </Head>
      <NextSeo
        title="GoDubai.uz - Dubayga sayohat agentligi"
        description="GoDubai.uz - Dubayga unutulmas turni taklif qilamiz"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
