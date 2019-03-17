import React from 'react'
import Content from './Content'
import styled from 'styled-components'

export default () => (
  <Footer>
    <FooterContent>footer</FooterContent>
  </Footer>
)

const Footer = styled.footer`
  background-color: #4a5a6a;
`

const FooterContent = styled(Content)`
  background-color: #2a3a4a;
  color: #ccc;
`
