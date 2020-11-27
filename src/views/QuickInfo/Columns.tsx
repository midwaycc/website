import styled from 'styled-components'
import Content from '~/layout/Content'
import media from '~/utils/media'

export const Columns = styled(Content)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  width: 100%;

  ${media.md} {
    flex-direction: row;
  }
`

export const Column = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
`
