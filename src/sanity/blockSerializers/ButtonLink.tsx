import React from 'react'
import { css } from 'styled-components'
import { SquareButton } from '~/components/SquareButton'
import { EnhancedLink } from './EnhancedLink'
import { SanityButtonLink } from '~/types/graphqlTypes'
import { Align } from '~/types/align'

export type ProperButtonLink = SanityButtonLink & {
  align?: Align | null
}

type Props = {
  node?: ProperButtonLink
  inButtonRow?: boolean
}

export function ButtonLink({ node, inButtonRow }: Props) {
  if (!node || !node.text || !node.href) return null

  const { text, href, align, dark, thick } = node

  return (
    <EnhancedLink
      mark={{ href }}
      css={css`
        display: inline-block;
        text-align: ${align || 'left'};
        margin: ${inButtonRow ? '0.5em' : '0'};
      `}
    >
      <SquareButton dark={dark} thick={thick}>
        {text}
      </SquareButton>
    </EnhancedLink>
  )
}
