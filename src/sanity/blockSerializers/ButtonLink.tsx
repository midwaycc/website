import React from 'react'
import { SquareButton } from '~/components/SquareButton'
import { EnhancedLink } from './EnhancedLink'
import { Align } from '~/types/align'
import { SanityButtonLink } from '~/types/graphqlTypes'

export type ProperButtonLink = SanityButtonLink & {
  align?: Align | null
}

type Props = {
  node?: ProperButtonLink
  inButtonRow?: boolean
}

export function ButtonLink({ node, inButtonRow }: Props) {
  if (!node || !node.text || !node.href) return null

  const { text, href: rawHref, align, dark, thick } = node
  const href =
    rawHref.indexOf('/') === 0 || rawHref.indexOf('http') === 0
      ? rawHref
      : `http://${rawHref}`

  return (
    <EnhancedLink
      mark={{ href }}
      style={{
        display: 'inline-block',
        textAlign: align || 'left',
        margin: inButtonRow ? '0.5em' : '0'
      }}
    >
      <SquareButton dark={dark} thick={thick}>
        {text}
      </SquareButton>
    </EnhancedLink>
  )
}
