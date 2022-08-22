
import React from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import '../styles/styles.scss'
import '../styles/main.scss'

import Head from 'next/head'


Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
  
  
  <>
    <Head>
      <title>The Northeast India Times</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700;900&display=swap" />
    </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
