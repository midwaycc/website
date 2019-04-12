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

const HamburgerLine = styled.span`
  display: block;
  width: 2em;
  height: 0.2em;
  position: relative;
  background-color: ${props => props.theme.header.color};
  border-radius: 0.2em;
  z-index: 1;

  transform-origin: 0.3em 0;

  transition: transform 0.5s ease, background 0.5s ease, opacity 0.55s ease,
    width 0.5s ease;

  & + & {
    margin-top: 0.3em;
  }

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  ${Toggle}:checked ~ & {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    width: 2.28em;
  }

  ${Toggle}:checked ~ &:nth-last-child(2) {
    opacity: 0;
    transform: unset;
  }

  ${Toggle}:checked ~ &:last-child {
    transform: rotate(-45deg) translate(-2px, -1px);
  }
`
