import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/theme.js';
import createEmotionCache from '../../config/createEmotionCache';
import '../styles/globals.scss';
import { BaseLayout } from '../layouts';
import { ModalContextProvider } from '../contexts/TransactionsModalContext';
import { SidebarContextProvider } from '../contexts/SidebarContext';
import { AuthContextProvider } from '../contexts/AuthContext';
import { AccountsContextProvider } from '../contexts/AccountsContext';
import { CreditCardContextProvider } from '../contexts/CreditCardContext';

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
        <AccountsContextProvider>
          <AuthContextProvider>
            <CreditCardContextProvider>
              <SidebarContextProvider>
                <ModalContextProvider>
                  {
                    isLayoutNotNeeded ? (<Component {...pageProps} />) : (
                      <BaseLayout>
                        <Component {...pageProps} />
                      </BaseLayout>)
                  }
                </ModalContextProvider>
              </SidebarContextProvider>
            </CreditCardContextProvider>
          </AuthContextProvider>
        </AccountsContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
