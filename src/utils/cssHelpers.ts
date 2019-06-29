import { useEffect } from 'react'
import { css } from 'styled-components'

export const MENU_OPEN_CLASS = 'menu-open'

export function useSetMenuOpen(open: boolean) {
  useEffect(() => {
    document.body.classList[open ? 'add' : 'remove'](MENU_OPEN_CLASS)
    return () => document.body.classList.remove(MENU_OPEN_CLASS)
  }, [open])
}

export const hiddenWhenMenuOpen = css`
  opacity: 1;
  transition: opacity 0s;
  transition-delay: 0;

  .${MENU_OPEN_CLASS} & {
    opacity: 0;
    transition-delay: 0.5s;
  }
`
