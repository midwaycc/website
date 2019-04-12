import React from 'react'
import styled from 'styled-components'
import media from '~/utils/media'

type Props = {
  navigationItems: any
}

export default ({ navigationItems }: Props) => {
  return (
    <NarrowNavContainer>
      <Hamburger>
        <Toggle />
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
    </NarrowNavContainer>
  )
}

const NarrowNavContainer = styled.div`
  display: block;

  ${media.lg} {
    display: none;
  }

  position: relative;
`

const Toggle = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  position: absolute;
  top: -3px;
  left: -2px;
  width: ${props => props.theme.header.height}px;
  height: ${props => props.theme.header.height}px;

  cursor: pointer;

  opacity: 0;
  z-index: 2;

  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const Hamburger = styled.div`
  height: ${props => props.theme.header.height}px;
  width: ${props => props.theme.header.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const X_TRANSITION = '0.35s ease'
const CENTER_TRANSITION = '0.2s ease'

const HamburgerLine = styled.span`
  display: block;
  width: 2em;
  height: 0.2em;
  position: relative;
  background-color: ${props => props.theme.header.color};
  border-radius: 0.2em;
  z-index: 1;

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
