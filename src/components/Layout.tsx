import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Head from './Head'
import PageContainer from './PageContainer'
import Header from './Header'
import Footer from './Footer'

export default (props: { children: React.ReactNode }) => (
  <>
    <Head />
    <GlobalStyles />
    <PageContainer>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </PageContainer>
  </>
)

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
