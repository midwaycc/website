import React from 'react'
import styled from 'styled-components'
import { NavItem, hasSubItems } from '~/views/Header/Navigation/types'
import { NavigationItem, NavigationItemWithSubmenu } from './NavigationItem'
import { NarrowMenuToggle } from './MenuToggle'

export const NarrowMenuContents = (props: { navigationItems: NavItem[] }) => {
  return (
    <MenuContainer>
      <NavList>
        {props.navigationItems.map((navItem: NavItem, i: number) =>
          hasSubItems(navItem) ? (
            <NavigationItemWithSubmenu key={i} {...navItem} />
          ) : (
            <NavigationItem key={i} {...navItem} />
          )
        )}
      </NavList>
    </MenuContainer>
  )
}

const MENU_TRANSITION = '.35s ease-out'

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: calc(0em + ${props => props.theme.header.height}px);
  font-size: 1.25em;
  position: absolute;
  top: ${props => props.theme.header.height / 2}px;
  right: ${props => props.theme.header.height / 2}px;
  width: 100vw;
  text-align: right;
  transition: all ${MENU_TRANSITION};
  transition-duration: 0.4s;
`

const MenuContainer = styled.div`
  position: absolute;
  top: -${props => props.theme.header.height / 2}px;
  right: -${props => props.theme.header.height / 2}px;
  margin: 0;
  overflow: hidden;
  z-index: 1;

  height: ${props => props.theme.header.height}px;
  width: ${props => props.theme.header.height}px;
  transition: all ${MENU_TRANSITION};
  transition-duration: 0.4s;
  border-radius: 50%;
  background-color: #099799;
  color: white;

  ${NarrowMenuToggle}:checked ~ & {
    height: 300vh;
    width: 300vh;
    top: -150vh;
    right: -150vh;
    opacity: 1;
    transition: all ${MENU_TRANSITION};
    transition-duration: 0.4s;

    ${NavList} {
      opacity: 1;
      top: 150vh;
      right: 150vh;
      transition-duration: 0.4s;
    }
  }
`
