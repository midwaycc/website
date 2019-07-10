import React from 'react'
import styled from 'styled-components'
import Content from '~/layout/Content'
import { hiddenWhenMenuOpen } from '~/layout/Header/Navigation/Narrow'

export default () => (
  <Container>
    <FooterContent>the footer isn't done yet</FooterContent>
  </Container>
)

const Container = styled.footer`
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.color};
  ${hiddenWhenMenuOpen};
`

const FooterContent = styled(Content)`
  text-align: center;
  padding-top: 2em;
  height: 16em;
  font-size: 1.5em;
`
