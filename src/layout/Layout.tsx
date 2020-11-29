import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Header } from '~/views/Header'
import { Footer } from '~/views/Footer'
import { TopNav as MinistryPageTopNav } from '~/templates/MinistryPage/TopNav'
// import { MediaIndicator } from '~/components/MediaIndicator'
import { Head } from './Head'
import { theme } from '~/theme'
import { hiddenWhenMenuOpen } from '~/utils/visibility'
import './index.css'

type Props = {
  children: React.ReactNode
  path: string
  data: any
}

export default function Layout({ children, path, data }: Props) {
  return (
    <>
      <GlobalStyles />
      <Head />
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Header />
          <Main>
            {path.indexOf('/ministries/') === 0 && (
              <MinistryPageTopNav data={data} path={path} />
            )}
            {children}
          </Main>
          <Footer />
        </PageContainer>
      </ThemeProvider>
      {/* <MediaIndicator /> */}
    </>
  )
}

const GlobalStyles = createGlobalStyle`
  .ReactModalPortal {
    font-family: ${theme.page.bodyFont};
    font-weight: 400;
  }
`

const PageContainer = styled.div`
  font-family: ${props => props.theme.page.bodyFont};
  font-weight: 400;
  width: 100%;
  position: relative;

  body.ReactModal__Body--open & {
    overflow: hidden;
  }
`

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(
    100vh - ${props => props.theme.header.height}px -
      ${props => props.theme.footer.height}
  );
  background-color: ${props => props.theme.page.background};
  color: ${props => props.theme.page.color};
  ${hiddenWhenMenuOpen};
`
