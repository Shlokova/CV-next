import {Html, Main, Head, NextScript} from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={'frontend developer'} />
        <meta name="keywords" content={'frontend, frontend developer, CV, resume, Shlokova, Anna, Shlokova Anna'} />
        <meta property="og:image" content="/share.webp" />
        <meta property="og:url" content="https://shlokova-cv.web.app/" />
        <meta property="og:title" content="Shlokova Anna" />
        <meta property="og:description" content="frontend developer" />
        <meta property="og:site_name" content="CV" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Shlokova Anna" />
        <meta name="twitter:description" content="frontend developer" />
        <meta name="twitter:image" content="/share.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
