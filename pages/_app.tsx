import type {AppProps} from 'next/app';
import React from 'react';
import '../styles/global.css';
import {Layout} from '../src/ui/kit/Layout/Layout';
import Head from 'next/head';
import {Analytics} from '@vercel/analytics/react';
import {ErrorBoundary} from '@/ui/common/ErrorBoundary/ErrorBoundary';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Shlokova Anna</title>
      </Head>
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </ErrorBoundary>
    </React.Fragment>
  );
}
