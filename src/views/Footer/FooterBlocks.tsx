import styled from 'styled-components'
import { Content } from '~/layout/Content'
import { media } from '~/utils/media'

export const FooterBlocks = styled(Content)`
  display: flex;
  flex-direction: column;

  ${media.md} {
    flex-direction: row;
  }
`

export const FooterBlock = styled.div`
  width: 100%;
  & ~ & {
    padding-top: 2em;
  }

  ${media.md} {
    width: 50%;

    & ~ & {
      padding-top: 0;
    }
  }
`
