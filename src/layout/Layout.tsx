import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Head from '~/components/Head'
import GlobalStyles from './GlobalStyles'
import PageContainer from './PageContainer'
import Header from '~/components/header/Header'
import Footer from '~/components/Footer'
import theme from '~/theme'

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => (
  <>
    <Head />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  </>
)

const Main = styled.main`
  z-index: 1;
`
