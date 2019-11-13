import React from 'react'
import styled, { css } from 'styled-components'
import { NavItem, hasSubItems } from '~/layout/Header/Navigation/types'
import { NavigationItem, NavigationItemWithSubmenu } from './NavigationItem'
import BaseToggle from '~/components/BaseToggle'

type Props = {
  className?: string
}

export default ({ className }: Props) => {
  return (
    <Container className={className}>
      <HamburgerLines />
    </Container>
  )
}

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

export const NarrowMenuToggle = styled(BaseToggle).attrs({
  id: 'narrow-menu-toggle'
})`
  right: 0;
  top: 0;
  width: ${props => props.theme.header.height}px;
  height: ${props => props.theme.header.height}px;
  z-index: 3;
`

export const hiddenWhenMenuOpen = css`
  opacity: 1;
  transition: opacity 0s;
  transition-delay: 0;

  ${NarrowMenuToggle}:checked ~ & {
    opacity: 0;
    transition-delay: 0.5s;
  }
`

const X_TRANSITION = '0.35s ease'
const CENTER_TRANSITION = '0.2s ease'
const MENU_TRANSITION = '.35s ease-out'

const Container = styled.div`
  position: relative;
  width: ${props => props.theme.header.height}px;
  height: ${props => props.theme.header.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${X_TRANSITION};
  will-change: transform;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;

  ${NarrowMenuToggle}:checked ~ header & {
    transform: rotate(45deg);
  }
`

const HamburgerLines = styled.div`
  &,
  &::before,
  &::after {
    content: '';
    width: 2.25em;
    height: 2px;
    background: #fff;
    position: absolute;
    transition: transform ${X_TRANSITION};
    will-change: transform;
    background-color: black;
    border-radius: 1px;
  }

  &::before {
    transform: translateY(0.6em);
  }

  &::after {
    transform: translateY(-0.6em);
  }

  ${NarrowMenuToggle}:checked ~ header &::after,
  ${NarrowMenuToggle}:checked ~ header &::before {
    transform: rotate(90deg);
  }
`

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
