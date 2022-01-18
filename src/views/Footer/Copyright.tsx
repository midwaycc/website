import React from 'react'
import styled from 'styled-components'
import { FooterBlock } from './FooterBlocks'
import { media } from '~/utils/media'
import sanityLogo from '~/../static/images/sanity-logo.svg'

const years = `2019 - ${new Date().getFullYear()}`
const churchName = <strong>Midway Community Church.</strong>

export function Copyright() {
  return (
    <Container>
      <CopyrightText>
        &copy; {years} {churchName} All Rights Reserved.
        <br />
        Structured content powered by{' '}
        <a
          href="https://www.sanity.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={sanityLogo}
            style={{
              height: '0.9em',
              width: 'auto',
              transform: 'translateY(0.1em)'
            }}
          />
        </a>
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
