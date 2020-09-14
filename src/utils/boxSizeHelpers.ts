import { css } from 'styled-components'
import { Align } from '~/types/align'
import { Size } from '~/types/size'
import media from '../utils/media'

export const PERCENT_ARRAY = [15, 25, 100.0 / 3, 50, 200.0 / 3, 100]
export const PERCENTS: Record<Size, number> = {
  full: 100,
  large: 200.0 / 3,
  medium: 50,
  small: 100.0 / 3,
  tiny: 25,
  mini: 15
}

export function getContainerStyles(size: number | Size, align?: Align) {
  const percent = typeof size === 'number' ? size : PERCENTS[size]
  const index = PERCENT_ARRAY.indexOf(percent)
  const maxIndex = PERCENT_ARRAY.length - 1

  return css`
    ${getCss(100, align)};

    ${media.sm} {
      ${getCss(PERCENT_ARRAY[Math.min(maxIndex, index + 2)], align)};
    }

    ${media.md} {
      ${getCss(PERCENT_ARRAY[Math.min(maxIndex, index + 1)], align)};
    }

    ${media.lg} {
      ${getCss(percent, align)};
    }
  `
}

function getCss(percent: number, align?: Align) {
  const common = css`
    width: ${percent}%;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  `

  if (percent === 100) {
    return css`
      ${common};
      float: none;
      padding-left: 0;
      padding-right: 0;
    `
  }

  switch (align) {
    case 'left':
      return css`
        ${common};
        float: left;
        padding-right: 1em;
      `
    case 'right':
      return css`
        ${common};
        float: right;
        padding-left: 1em;
      `
    case 'center':
    default:
      return css`
        ${common};
        margin-left: auto;
        margin-right: auto;
      `
  }
}
