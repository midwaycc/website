import styled from 'styled-components'
import media from '~/utils/media'
import theme from '~/theme'

const src = theme.header.logo
  ? `/logo_comps/horizontal_optimized/horizontal_${theme.header.logo}.jpg`
  : '/MCC_logo_3.jpg'

export default styled.img.attrs({
  src
})`
  height: calc(${props => props.theme.header.height}px - 1em);
  width: auto;
  margin: 0.5em 0;
  transform: translateX(0.5em);
  transition: transform 200ms ease;

  ${media.xl.plusEm(0.5)} {
    transform: translateX(0);
  }
`
