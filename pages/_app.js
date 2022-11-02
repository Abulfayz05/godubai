import "../styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <NextSeo
        title="GoDubai.uz - Dubayga sayohat agentligi"
        description="GoDubai.uz - Dubayga unutulmas turni taklif qilamiz"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
