import styled, { css } from 'styled-components'
import media from '~/utils/media'
import theme from '~/theme'

const shiftOnEdge = css`
  margin-left: 0.75rem;
  transform: translateX(0.75rem);
  transition: transform 200ms ease;

  ${media.xl.plusEm(0.75)} {
    transform: translateX(0);
  }
`

/* The logo image is 1449 x 358 */
const LOGO_HEIGHT = theme.header.height - 24
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * 1449) / 358)
const SQUISH_WIDTH = 12 + LOGO_WIDTH + 8 + theme.header.height

export const HeaderLogo = styled.img.attrs({
  src: '/logos/rgb/png/mcc_logo_horizontal_rgb.png',
  className: 'navigation-link'
})`
  height: ${LOGO_HEIGHT}px;
  width: auto;
  ${shiftOnEdge};
  margin-top: 0.75em;

  @media screen and (max-width: ${SQUISH_WIDTH}px) {
    width: calc(100vw - ${SQUISH_WIDTH - LOGO_WIDTH}px);
    height: auto;
    transform: translateY(calc((${SQUISH_WIDTH}px - 100vw) / 9));
  }
`
