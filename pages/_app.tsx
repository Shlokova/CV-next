import type {AppProps} from 'next/app';
import React from 'react';
import '../styles/global.css';
import {Layout} from '../src/ui/kit/Layout/Layout';
import Head from 'next/head';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Shlokova Anna</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
