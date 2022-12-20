import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/theme.js';
import createEmotionCache from '../../config/createEmotionCache';
import '../styles/globals.scss';
import { BaseLayout } from '../Layout';
import { TransactionContextProvider } from '../contexts/TransactionsContext';
import { ModalContextProvider } from '../contexts/ModalContext';
import { SidebarContextProvider } from '../contexts/SidebarContext';
import { AuthContextProvider } from '../contexts/AuthContext';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, ...appProps } = props;
  const LayoutNotNeeded = ['/']
  const isLayoutNotNeeded = LayoutNotNeeded.includes(appProps.router.pathname);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Brave finances</title>
      </Head>
      <ThemeProvider theme={theme}>

        <AuthContextProvider>
          <SidebarContextProvider>
            <TransactionContextProvider>
              <ModalContextProvider>
                {
                  isLayoutNotNeeded ? (<Component {...pageProps} />) : (
                    <BaseLayout>
                      <Component {...pageProps} />
                    </BaseLayout>)
                }
              </ModalContextProvider>
            </TransactionContextProvider>
          </SidebarContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}