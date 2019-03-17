import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from '~/components/Head'
import PageContainer from '~/components/PageContainer'
import Header from '~/components/Header'
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

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Main = styled.main`
  margin-top: -1em;
`
