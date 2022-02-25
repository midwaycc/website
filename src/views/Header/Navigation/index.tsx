import React from 'react'
import styled from 'styled-components'
import { WideNavigation } from './Wide'
import { NarrowMenuIcon } from './Narrow/MenuIcon'
import { media } from '~/utils/media'
import { shownAbove, hiddenAbove } from '~/utils/visibility'
import { NavItem } from './types'

export const BREAKPOINT = media.lg

type Props = {
  navigationItems: NavItem[]
}

export function Navigation({ navigationItems }: Props) {
  return (
    <>
      <StyledWideNavigation navigationItems={navigationItems} />
      {/* Due to z-index and SSR (which rules out a Portal),
          the contents of the narrow menu are rendered from the parent
          Header component, eliminating the need to pass in the items here. */}
      <StyledNarrowMenuIcon />
    </>
  )
}

const StyledWideNavigation = styled(WideNavigation)`
  ${shownAbove(BREAKPOINT, 'flex')}
`

const StyledNarrowMenuIcon = styled(NarrowMenuIcon)`
  ${hiddenAbove(BREAKPOINT, 'flex')}
`
