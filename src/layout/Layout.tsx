import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Head from '~/components/Head'
import PageContainer from './PageContainer'
import Header from '~/components/header/Header'
import Footer from '~/components/Footer'
import theme from '~/theme'

import './index.css'

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => (
  <>
    <Head />
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
  position: relative;
`
