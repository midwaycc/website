import React from 'react'
import styled from 'styled-components'
import { NavigationItem, NavigationItemWithSubmenu } from './NavigationItem'
import { NavItem, hasSubItems } from '../types'
import media from '~/utils/media'

type Props = {
  navigationItems: NavItem[]
}

export default ({ navigationItems }: Props) => (
  <Container>
    {navigationItems.map((navItem: NavItem, i: number) =>
      hasSubItems(navItem) ? (
        <NavigationItemWithSubmenu key={i} {...navItem} />
      ) : (
        <NavigationItem key={i} {...navItem} />
      )
    )}
  </Container>
)

const Container = styled.ul`
  display: none;

  ${media.lg} {
    display: flex;
  }

  font-family: ${props => props.theme.header.font};
  font-size: 1.05em;
  color: ${props => props.theme.header.color};
  height: 100%;
  padding: 0;
  margin: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1000;
`
