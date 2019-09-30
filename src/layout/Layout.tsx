import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Head from './Head'
import Header from './Header'
import Footer from './Footer'
// import MediaIndicator from '~/components/MediaIndicator'
import theme from '~/theme'
import { hiddenWhenMenuOpen } from '~/layout/Header/Navigation/Narrow'

// import 'typeface-nunito'
// import 'typeface-montserrat'
// import 'typeface-open-sans'
import './index.css'
import './fonts.css'

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
    {/*<MediaIndicator />*/}
  </>
)

const PageContainer = styled.div`
  font-family: ${props => props.theme.page.bodyFont};
  width: 100%;
  position: relative;
`
const Main = styled.main`
  position: relative;
  // min-height: 100vh;
  background-color: ${props => props.theme.page.background};
  ${hiddenWhenMenuOpen};
`
