import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { SanityGatsbyImage } from '~/utils/blockSerializers/SanityGatsbyImage'
import { VerticalSpace } from '~/utils/blockSerializers/VerticalSpace'
import { EnhancedLink } from '~/utils/blockSerializers/EnhancedLink'
import { CustomBlock } from '~/utils/blockSerializers/CustomBlock'
import { VideoEmbed } from '~/utils/blockSerializers/VideoEmbed'
import { ButtonLink } from '~/utils/blockSerializers/ButtonLink'
import { Picture } from '~/utils/blockSerializers/Picture'
import { ContentSection } from '~/utils/blockSerializers/ContentSection'

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
            verticalSpace: VerticalSpace,
            videoEmbed: VideoEmbed,
            buttonLink: ButtonLink,
            picture: Picture,
            contentSection: ContentSection
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
