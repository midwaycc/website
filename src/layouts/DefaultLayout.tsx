import React, { useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from '~/components/Head'
import PageContainer from '~/components/PageContainer'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import theme from '~/theme'

export default (props: { children: React.ReactNode }) => {
  console.log('Layout rendering')
  useEffect(() => {
    console.log('Layout mounting!')
  }, [])
  return (
    <>
      <Head />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Header />
          <main>{props.children}</main>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </>
  )
}

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {

  }

  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`
