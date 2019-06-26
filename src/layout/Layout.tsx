import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Head from '~/components/Head'
import PageContainer from './PageContainer'
import Header from '~/components/header/Header'
import Footer from '~/components/Footer'
import MediaIndicator from './MediaIndicator'
import theme from '~/theme'
import { hiddenWhenMenuOpen } from '~/utils/cssHelpers'

import 'typeface-nunito'
import 'typeface-montserrat'
import 'typeface-open-sans'
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
    {/* <MediaIndicator /> */}
  </>
)

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  background-color: ${props => props.theme.page.background};
  ${hiddenWhenMenuOpen};
`
