import React from 'react'
import { css } from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import Content from '~/layout/Content'
import { VerticalSpace } from '~/utils/blockSerializers/VerticalSpace'
import { EnhancedLink } from '~/utils/blockSerializers/EnhancedLink'
import { CustomBlock } from '~/utils/blockSerializers/CustomBlock'
import { VideoEmbed } from '~/utils/blockSerializers/VideoEmbed'
import { ButtonLink } from '~/utils/blockSerializers/ButtonLink'
import { Picture } from '~/utils/blockSerializers/Picture'

type Props = {
  blocks: unknown[]
  fullWidth?: boolean
}

const {
  defaultSerializers: {
    block: DefaultBlockSerializer,
    list: DefaultListSerializer
  }
} = BlockContent

const ContentWrapper = ({
  serializer,
  fullWidth
}: {
  serializer: any
  fullWidth?: boolean
}) => (props: any) => {
  const unmodifiedOutput = serializer(props)

  if (props.node && props.node._type === 'fullWidthSection') {
    return unmodifiedOutput
  }

  return (
    <Content
      css={css`
        ${fullWidth ? 'padding: 0' : ''};
      `}
    >
      {unmodifiedOutput}
    </Content>
  )
}

export default ({ blocks, fullWidth }: Props) => {
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
          },
          block: ContentWrapper({
            serializer: DefaultBlockSerializer,
            fullWidth
          }),
          list: ContentWrapper({ serializer: DefaultListSerializer, fullWidth })
        }}
      />
      <div css="clear: both" />
    </>
  )
}
