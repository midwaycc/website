import React from 'react'
import styled from 'styled-components'
import Content from '~/layout/Content'

export default () => (
  <Container>
    <FooterContent>footer</FooterContent>
  </Container>
)

const Container = styled.footer`
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.color};
`

const FooterContent = styled(Content)`
  text-align: center;
  padding-top: 2em;
  height: 16em;
`
