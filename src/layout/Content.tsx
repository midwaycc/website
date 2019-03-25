import styled from '~/theme/styled-components'
import media from '~/utils/media'

export default styled.div`
  width: 100%;

  ${media.xl} {
    margin: 0 auto;
    max-width: ${media.xl.width};
  }
`
