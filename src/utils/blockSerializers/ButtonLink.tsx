import React from 'react'
import { css } from 'styled-components'
import { SquareButton } from '~/components/SquareButton'
import { EnhancedLink } from './EnhancedLink'
import { SanityButtonLink } from '~/types/graphqlTypes'
import { Align } from '~/types/align'

type Props = {
  node?: SanityButtonLink & {
    align?: Align | null
  }
}

export function ButtonLink({ node }: Props) {
  if (!node || !node.text || !node.href) return null

  const { text, href, align, dark, thick } = node

  return (
    <EnhancedLink
      mark={{ href }}
      css={css`
        display: block;
        text-align: ${align || 'left'};
      `}
    >
      <SquareButton dark={dark} thick={thick}>
        {text}
      </SquareButton>
    </EnhancedLink>
  )
}
