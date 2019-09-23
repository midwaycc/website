import React from 'react'
import styled from 'styled-components'
import { NavigationItem, NavigationItemWithSubmenu } from './NavigationItem'
import { NavItem, hasSubItems } from '~/layout/Header/Navigation/types'

type Props = {
  navigationItems: NavItem[]
  className?: string
}

export default ({ navigationItems, className }: Props) => (
  <Container className={className}>
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
  font-family: ${props => props.theme.header.font};
  font-size: 1.05em;
  color: ${props => props.theme.header.color};
  height: 100%;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1000;
`
