import styled from '~/theme/styled-components'
import media from '~/utils/media'

const src = '/MCC_logo_3.jpg'

export default styled.img.attrs({ src })`
  height: calc(${props => props.theme.header.height}px - 1em);
  width: auto;
  margin: 0.5em 0;
  transform: translateX(0.5em);
  transition: transform 200ms ease;

  ${media.xl.plusEm(0.5)} {
    transform: translateX(0);
  }
`
