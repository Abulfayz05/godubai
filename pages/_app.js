import "../styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Layout from "../components/Layout";
import Gtag from "../components/gtag";

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
      <Gtag />
      <NextSeo
        title="Dubayga sayohat 2022 qulay narxda tur taklif qilamiz "
        description="GoDubai.uz - Dubayga unutilmas sayohatni taklif qilamiz"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
