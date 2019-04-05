import React from 'react'
import styled from 'styled-components'
import NavigationItem, { Props as NavProps } from './NavigationItem'

const navigation: NavProps[] = [
  { text: 'New Here?', link: '/new' },
  { text: 'About', link: '/about' },
  { text: 'Events', link: '/events' },
  {
    text: 'Ministries',
    link: '/ministries',
    items: [
      { text: 'One', link: '/one' },
      { text: 'Two', link: '/two' },
      { text: 'Three', link: '/three' }
    ]
  },
  { text: 'Giving', link: '/giving' }
]

export default () => (
  <Container>
    {navigation.map((nav, i) => (
      <NavigationItem key={i} {...nav} />
    ))}
  </Container>
)

const Container = styled.ul`
  font-family: ${props => props.theme.fonts.navigation};
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1000;
`
