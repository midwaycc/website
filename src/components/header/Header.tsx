import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Content from '~/layout/Content'
import Logo from './Logo'
import Navigation from './Navigation'

export default () => (
  <Container>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation />
    </HeaderContent>
  </Container>
)

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  height: ${props => props.theme.header.height}px;
  position: relative;
  z-index: 999;
`

const HeaderContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
`
