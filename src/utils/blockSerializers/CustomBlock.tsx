import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { BlockQuote } from './BlockQuote'

const BlockTypeSerializer = BlockContent.defaultSerializers.types.block

type Props = {
  node?: {
    style?: string
  }
}

export function CustomBlock(props: Props) {
  const { node } = props

  if (node && node.style === 'blockquote') {
    return <BlockQuote {...props} />
  }

  return <BlockTypeSerializer {...props} />
}
