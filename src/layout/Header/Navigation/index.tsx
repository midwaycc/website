import React from 'react'
import Wide from './Wide'
import Narrow from './Narrow'
import { NavItem } from './types'
import media from '~/utils/media'
import { css } from 'styled-components'

type Props = {
  navigationItems: NavItem[]
}

export default ({ navigationItems }: Props) => (
  <>
    <Wide
      navigationItems={navigationItems}
      css={css`
        display: none;
        ${media.lg} {
          display: flex;
        }
      `}
    />
    <Narrow
      navigationItems={navigationItems}
      css={css`
        display: flex;
        ${media.lg} {
          display: none;
        }
      `}
    />
  </>
)
