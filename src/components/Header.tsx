import React from 'react'
import styled from 'styled-components'
import Content from '~/layout/Content'
import media from '~/utils/media'

export default () => (
  <Container>
    <HeaderContent>
      <Logo src="/MCC_logo_3.jpg" />
      <NavigationMenu>
        <NavItem>One</NavItem>
        <NavItem>Two</NavItem>
        <NavItem>Three</NavItem>
        <NavItem>Four</NavItem>
        <NavItem>Five</NavItem>
      </NavigationMenu>
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

const Logo = styled.img`
  height: 60px;
  width: auto;
  margin: 0.5em 0;
  transform: translateX(0.5em);
  transition: transform 200ms ease;

  ${media.xl.plusEm(0.5)} {
    transform: translateX(0);
  }
`

const NavigationMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(-1em);
  transition: transform 200ms ease;

  ${media.xl.plusEm(1)} {
    transform: translateX(0);
  }
`

const NavItem = styled.li`
  list-style: none;

  & + & {
    margin-left: 2em;
  }
`
