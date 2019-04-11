import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import { NavItem } from '../types'
import media from '~/utils/media'

type Props = {
  navigationItems: NavItem[]
}

export default ({ navigationItems }: Props) => (
  <Container>
    {navigationItems.map((nav: NavItem, i: number) => (
      <NavigationItem key={i} {...nav} />
    ))}
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
