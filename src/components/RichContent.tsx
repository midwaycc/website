import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { SanityGatsbyImage } from '~/utils/blockSerializers/SanityGatsbyImage'
import { VerticalSpace } from '~/utils/blockSerializers/VerticalSpace'
import { EnhancedLink } from '~/utils/blockSerializers/EnhancedLink'
import { CustomBlock } from '~/utils/blockSerializers/CustomBlock'

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
            block: CustomBlock,
            leftImage: SanityGatsbyImage,
            centerImage: SanityGatsbyImage,
            rightImage: SanityGatsbyImage,
            leftImageWithWidth: SanityGatsbyImage,
            centerImageWithWidth: SanityGatsbyImage,
            rightImageWithWidth: SanityGatsbyImage,
            verticalSpace: VerticalSpace
          },
          marks: {
            link: EnhancedLink
          }
        }}
      />
      <div css="clear: both" />
    </>
  )
}
