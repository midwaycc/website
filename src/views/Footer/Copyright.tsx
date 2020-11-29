import React from 'react'
import styled from 'styled-components'
import { FooterBlock } from './FooterBlocks'
import { media } from '~/utils/media'

const years = `2019 - ${new Date().getFullYear()}`
const churchName = <strong>Midway Community Church.</strong>

export function Copyright() {
  return (
    <Container>
      <CopyrightText>
        &copy; {years} {churchName} All Rights Reserved.
      </CopyrightText>
    </Container>
  )
}

const Container = styled(FooterBlock)`
  padding: 0 0.5em;
  padding-top: 9em;
  text-align: center;
  z-index: 1;

  ${media.md} {
    padding-top: 3em;
  }
`

const CopyrightText = styled.p`
  font-style: italic;
  margin: 0;
  transform: translateY(0.8em);

  ${media.md} {
    transform: translateY(0);
  }
`
