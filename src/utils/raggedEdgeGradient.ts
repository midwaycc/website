import { css } from 'styled-components'
import { darken } from 'polished'
import { colors } from '~/theme/colors'

export const raggedEdgeGradient = (
  [r0, g0, b0]: number[],
  [r, g, b]: number[],
  nextColor: string = colors.white.hex
) => css`
  background-color: rgba(${r}, ${g}, ${b}, 1);
  background-image: linear-gradient(
      to bottom,
      rgb(${r0}, ${g0}, ${b0}) 0%,
      rgb(${r}, ${g}, ${b}) 100%
    ),
    linear-gradient(
      160deg,
      rgba(${r}, ${g}, ${b}, 1) 0%,
      rgba(${r}, ${g}, ${b}, 1) 50%,
      rgba(${r}, ${g}, ${b}, 0) 50%,
      rgba(${r}, ${g}, ${b}, 0) 100%
    ),
    linear-gradient(
      -160deg,
      rgba(${r}, ${g}, ${b}, 1) 0%,
      rgba(${r}, ${g}, ${b}, 1) 50%,
      rgba(${r}, ${g}, ${b}, 0) 50%,
      rgba(${r}, ${g}, ${b}, 0) 100%
    ),
    linear-gradient(
      to bottom,
      ${darken(0.1, nextColor)} 0%,
      ${darken(0.04, nextColor)} 75%,
      ${nextColor} 100%
    );
  background-position: top center, bottom center, bottom center, bottom center;
  background-size: 100% calc(100% - 2rem), 2rem 2rem, 2rem 2rem, 100% 2rem;
  background-repeat: repeat-x;
`
