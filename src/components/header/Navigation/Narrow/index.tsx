import React, { useState } from 'react'
import styled from 'styled-components'
import media from '~/utils/media'
import { NavItem } from '../types'
import HeaderWithoutNav, { HEADER_SHADOW } from '../../HeaderWithoutNav'
import NavigationItem from './NavigationItem'
import BaseToggle from '~/components/BaseToggle'

type Props = {
  navigationItems: any
}

export default ({ navigationItems }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <NarrowNavContainer>
      <Hamburger onClick={() => setOpen(o => !o)}>
        <Toggle checked={open} />

        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />

        <DuplicateHeader
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        />

        <MenuContainer>
          <NavList>
            {navigationItems.map((nav: NavItem, i: number) => (
              <NavigationItem key={i} {...nav} />
            ))}
          </NavList>
        </MenuContainer>
      </Hamburger>
    </NarrowNavContainer>
  )
}

const X_TRANSITION = '0.35s ease'
const CENTER_TRANSITION = '0.2s ease'
const MENU_TRANSITION = '.35s ease-out'

const NarrowNavContainer = styled.div`
  display: block;

  ${media.lg} {
    display: none;
  }

  position: relative;
`

const Toggle = styled(BaseToggle)`
  width: ${props => props.theme.header.height}px;
  height: ${props => props.theme.header.height}px;
  z-index: 4;
`

const Hamburger = styled.div`
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

  ${Toggle}:checked ~ &:not(:nth-of-type(2)) {
    width: 2.25em;
  }

  ${Toggle}:checked ~ &:first-of-type {
    transform: rotate(45deg) translate(0.05em, -0.1em);
  }

  ${Toggle}:checked ~ &:nth-of-type(2) {
    opacity: 0;
    transition: opacity ${CENTER_TRANSITION};
  }

  ${Toggle}:checked ~ &:last-of-type {
    transform: rotate(-45deg) translate(-0.05em, 0.1em);
  }
`

const DuplicateHeader = styled(HeaderWithoutNav)`
  position: absolute !important;
  top: 0;
  left: calc(-100vw + ${props => props.theme.header.height}px);
  right: 0;
  bottom: 0;
  z-index: 2;
  position: unset;
  box-shadow: unset;
  transition: box-shadow 0.15s ease;

  ${Toggle}:checked ~ & {
    box-shadow: ${HEADER_SHADOW};
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: calc(0em + ${props => props.theme.header.height}px);
  font-size: 1.5em;
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
  background-color: white;

  ${Toggle}:checked ~ & {
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
