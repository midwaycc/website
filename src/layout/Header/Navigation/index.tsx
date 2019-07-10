import React from 'react'
import { css } from 'styled-components'
import Wide from './Wide'
import Narrow from './Narrow'
import { NavItem } from './types'
import media from '~/utils/media'
import { shownAbove, hiddenAbove } from '~/utils/visibility'

export const BREAKPOINT = media.lg

type Props = {
  navigationItems: NavItem[]
}

export default ({ navigationItems }: Props) => (
  <>
    <Wide
      navigationItems={navigationItems}
      css={shownAbove(BREAKPOINT, 'flex')}
    />
    <Narrow css={hiddenAbove(BREAKPOINT, 'flex')} />
  </>
)
