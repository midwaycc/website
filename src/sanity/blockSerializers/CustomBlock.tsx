import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const BlockTypeSerializer = BlockContent.defaultSerializers.types.block

type Props = {
  node?: unknown
}

export function CustomBlock(props: Props) {
  return <BlockTypeSerializer {...props} />
}
