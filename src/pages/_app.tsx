import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { AccountsContextProvider } from '../contexts/AccountsContext';
import { AuthContextProvider } from '../contexts/AuthContext';
import { CreditCardContextProvider } from '../contexts/CreditCardContext';
import { SidebarContextProvider } from '../contexts/SidebarContext';
import { ModalContextProvider } from '../contexts/TransactionsContext';
import { BaseLayout } from '../layouts';
import { GlobalStyle } from '../styles/global';
import { defaultTheme, theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {

  const {pathname} = useRouter()
  const LayoutNotNeeded = ['/']
  const isLayoutNotNeeded = LayoutNotNeeded.includes(pathname);

    return (
      <>
      <Head>
        <title>Brave finances</title>
      </Head>
        <StyledThemeProvider theme={defaultTheme}>
          <ThemeProvider theme={theme}>
            <AccountsContextProvider>
              <AuthContextProvider>
                <CreditCardContextProvider>
                  <SidebarContextProvider>
                    <ModalContextProvider>
                      <GlobalStyle />
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
        </StyledThemeProvider>
      </>
  );
}
