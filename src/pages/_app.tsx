import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/theme.js';
import createEmotionCache from '../../config/createEmotionCache';
import '../styles/globals.scss';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BaseLayout } from '../Layout';
import { TransactionContextProvider } from '../contexts/TransactionsContext';
import { ModalContextProvider } from '../contexts/ModalContext';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Brave finances</title>
      </Head>
      <ThemeProvider theme={theme}>
        <TransactionContextProvider>
          <ModalContextProvider>
            <ProSidebarProvider>
              <BaseLayout>
                <Component {...pageProps} />
              </BaseLayout>
            </ProSidebarProvider>
          </ModalContextProvider>
        </TransactionContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}