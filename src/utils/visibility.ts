import { css } from 'styled-components'
import { NarrowMenuToggle } from '~/views/Header/Navigation/Narrow/MenuToggle'
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

export const hiddenWhenMenuOpen = css`
  opacity: 1;
  transition: opacity 0s;
  transition-delay: 0;

  ${NarrowMenuToggle}:checked ~ & {
    opacity: 0;
    transition-delay: 0.5s;
  }
`
