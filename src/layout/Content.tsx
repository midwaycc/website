import styled from 'styled-components'
import { media } from '~/utils/media'

export const Content = styled.div`
  width: 100%;
  padding: 0 1em;

  ${media.xl} {
    margin: 0 auto;
    max-width: ${media.xl.width};
  }
`
