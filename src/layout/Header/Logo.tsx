import styled, { css } from 'styled-components'
import media from '~/utils/media'

export const shiftOnEdge = css`
  margin-left: 0.75rem;
  transform: translateX(0.75rem);
  transition: transform 200ms ease;

  ${media.xl.plusEm(0.75)} {
    transform: translateX(0);
  }
`

export default styled.img.attrs({
  src: '/logos/rgb/png/mcc_logo_horizontal_rgb.png',
  className: 'navigation-link'
})`
  height: calc(${props => props.theme.header.height}px - 1.5em);
  width: auto;
  ${shiftOnEdge};
  margin-top: 0.75em;
`
