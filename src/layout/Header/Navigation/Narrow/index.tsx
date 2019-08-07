import React, { useState } from 'react'
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
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
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
  height: ${props => props.theme.header.height}px;
  width: ${props => props.theme.header.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`

const HamburgerLine = styled.span`
  display: block;
  width: 2em;
  height: 0.2em;
  position: relative;
  background-color: ${props => props.theme.header.color};
  border-radius: 0.2em;
  z-index: 3;

  transform-origin: 0.3em 0;

  transition: all ${X_TRANSITION};

  & + & {
    margin-top: 0.3em;
  }

  ${NarrowMenuToggle}:checked ~ header &:not(:nth-of-type(2)) {
    width: 2.25em;
  }

  ${NarrowMenuToggle}:checked ~ header &:first-of-type {
    transform: rotate(45deg) translate(0.05em, -0.1em);
  }

  ${NarrowMenuToggle}:checked ~ header &:nth-of-type(2) {
    opacity: 0;
    transition: opacity ${CENTER_TRANSITION};
  }

  ${NarrowMenuToggle}:checked ~ header &:last-of-type {
    transform: rotate(-45deg) translate(-0.05em, 0.1em);
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
