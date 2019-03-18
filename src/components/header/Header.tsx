import React from 'react'
import styled from 'styled-components'
import Content from '~/layout/Content'
import Logo from './Logo'
import Navigation from './Navigation'

export default () => (
  <Container>
    <HeaderContent>
      <Logo />
      <Navigation />
    </HeaderContent>
  </Container>
)

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 2;
`

const HeaderContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
