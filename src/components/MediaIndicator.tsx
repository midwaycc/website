import React from 'react'
import styled from 'styled-components'
import useWindowSize from '@rooks/use-window-size'
import { media } from '~/utils/media'

export function MediaIndicator() {
  const { innerWidth } = useWindowSize()

  return (
    <Container>
      {innerWidth}
      <Size />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  text-align: center;
  z-index: 99999;
  background-color: darkgreen;
  color: white;
`

const Size = styled.div`
  ::after {
    content: 'xs';
    ${media.sm} {
      content: 'sm';
    }
    ${media.md} {
      content: 'md';
    }
    ${media.lg} {
      content: 'lg';
    }
    ${media.xl} {
      content: 'xl';
    }
  }
`
