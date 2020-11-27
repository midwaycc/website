import React from 'react'
import styled from 'styled-components'
import { hiddenWhenMenuOpen } from '~/views/Header/Navigation/Narrow'
import { FooterBlocks, FooterBlock } from './FooterBlocks'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'
import { Copyright } from './Copyright'
import { FloatingLogo } from './FloatingLogo'

export default () => {
  return (
    <Container>
      <FooterBlocks>
        <FooterBlock>
          <ContactForm />
        </FooterBlock>
        <ContactInfo />
      </FooterBlocks>
      <FooterBlocks>
        <Copyright />
        <FloatingLogo />
      </FooterBlocks>
    </Container>
  )
}

const Container = styled.footer`
  min-height: ${props => props.theme.footer.height};
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.color};
  margin: 0;
  padding: 4em 0 1em 0;
  ${hiddenWhenMenuOpen};
`
