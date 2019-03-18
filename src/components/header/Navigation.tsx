import React from 'react'
import styled from 'styled-components'
import media from '~/utils/media'
import NavigationItem from './NavigationItem'

export default () => (
  <Container>
    <NavigationItem>New Here?</NavigationItem>
    <NavigationItem>About</NavigationItem>
    <NavigationItem>Events</NavigationItem>
    <NavigationItem>Ministries</NavigationItem>
    <NavigationItem>Giving</NavigationItem>
  </Container>
)

const Container = styled.ul`
  display: flex;

  flex-direction: row;
  align-items: center;
  transform: translateX(-1em);
  transition: transform 200ms ease;

  ${media.xl.plusEm(1)} {
    transform: translateX(0);
  }
`
