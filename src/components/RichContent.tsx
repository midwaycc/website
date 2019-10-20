import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { SanityGatsbyImage } from '~/utils/blockSerializers/SanityGatsbyImage'
import { VerticalSpace } from '~/utils/blockSerializers/VerticalSpace'

type Props = {
  blocks: unknown[]
}

export default ({ blocks }: Props) => {
  return (
    <>
      <BlockContent
        blocks={blocks}
        serializers={{
          types: {
            leftImage: SanityGatsbyImage,
            centerImage: SanityGatsbyImage,
            rightImage: SanityGatsbyImage,
            leftImageWithWidth: SanityGatsbyImage,
            centerImageWithWidth: SanityGatsbyImage,
            rightImageWithWidth: SanityGatsbyImage,
            verticalSpace: VerticalSpace
          }
        }}
      />
      <div css="clear: both" />
    </>
  )
}
