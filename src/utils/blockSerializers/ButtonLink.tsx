import React from 'react'
import { SquareButton } from '~/components/SquareButton'
import { EnhancedLink } from './EnhancedLink'

type Props = {
  node?: {
    text?: string
    href?: string
    dark?: boolean
    thick?: boolean
  }
}

export function ButtonLink({ node }: Props) {
  if (!node || !node.text || !node.href) return null

  const { text, href, dark, thick } = node

  return (
    <EnhancedLink mark={{ href }}>
      <SquareButton dark={dark} thick={thick}>
        {text}
      </SquareButton>
    </EnhancedLink>
  )
}
