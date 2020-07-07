import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { VerticalSpace } from '~/utils/blockSerializers/VerticalSpace'
import { EnhancedLink } from '~/utils/blockSerializers/EnhancedLink'
import { CustomBlock } from '~/utils/blockSerializers/CustomBlock'
import { VideoEmbed } from '~/utils/blockSerializers/VideoEmbed'
import { ButtonLink } from '~/utils/blockSerializers/ButtonLink'
import { Picture } from '~/utils/blockSerializers/Picture'

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
            verticalSpace: VerticalSpace,
            videoEmbed: VideoEmbed,
            buttonLink: ButtonLink,
            picture: Picture
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
