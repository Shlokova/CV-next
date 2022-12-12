import type {AppProps} from 'next/app';
import React from 'react';
import '../styles/global.css';
import {Layout} from '../src/ui/kit/Layout/Layout';
import {ErrorBoundary} from 'next/dist/client/components/error-boundary';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
