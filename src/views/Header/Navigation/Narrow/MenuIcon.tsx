import React from 'react'
import styled from 'styled-components'
import { NarrowMenuToggle } from './MenuToggle'

type Props = {
  className?: string
}

export function NarrowMenuIcon({ className }: Props) {
  return (
    <Container className={className}>
      <HamburgerLines />
      {/* Due to z-index and SSR (which rules out a Portal),
          the contents of the narrow menu are rendered by the Header
          component, and this component is just the lines. */}
    </Container>
  )
}

const X_TRANSITION = '0.35s ease'

const Container = styled.div`
  position: relative;
  width: ${props => props.theme.header.height}px;
  height: ${props => props.theme.header.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${X_TRANSITION};
  will-change: transform;
  -webkit-tap-highlight-color: ${props => props.theme.colors.black.rgba(0)};
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
    position: absolute;
    transition: transform ${X_TRANSITION};
    will-change: transform;
    background-color: ${props => props.theme.colors.mediumTeal.hex};
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
