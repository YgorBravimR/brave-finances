import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import createEmotionCache from '../../config/createEmotionCache';
import '../styles/globals.scss';
import { AccountsContextProvider } from '../contexts/AccountsContext';
import { AuthContextProvider } from '../contexts/AuthContext';
import { CreditCardContextProvider } from '../contexts/CreditCardContext';
import { SidebarContextProvider } from '../contexts/SidebarContext';
import { ModalContextProvider } from '../contexts/TransactionsContext';
import { BaseLayout } from '../layouts';
import { theme } from '../styles/theme';

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
