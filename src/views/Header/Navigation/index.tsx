import React from 'react'
import { WideNavigation } from './Wide'
import { NarrowMenuIcon } from './Narrow/MenuIcon'
import { NavItem } from './types'
import media from '~/utils/media'
import { shownAbove, hiddenAbove } from '~/utils/visibility'

export const BREAKPOINT = media.lg

type Props = {
  navigationItems: NavItem[]
}

export function Navigation({ navigationItems }: Props) {
  return (
    <>
      <WideNavigation
        navigationItems={navigationItems}
        css={shownAbove(BREAKPOINT, 'flex')}
      />
      {/* Due to z-index and SSR (which rules out a Portal),
          the contents of the narrow menu are rendered from the parent
          Header component, eliminating the need to pass in the items here. */}
      <NarrowMenuIcon css={hiddenAbove(BREAKPOINT, 'flex')} />
    </>
  )
}
