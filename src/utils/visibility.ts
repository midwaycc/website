import { css } from 'styled-components'
import { StringCompatibleQuery } from '~/utils/media'

export const shownAbove = (
  breakpoint: StringCompatibleQuery,
  display: string
) => css`
  display: none;
  ${breakpoint} {
    display: ${display};
  }
`

export const hiddenAbove = (
  breakpoint: StringCompatibleQuery,
  display: string
) => css`
  display: ${display};
  ${breakpoint} {
    display: none;
  }
`
