import React from 'react'
import { css } from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import Content from '~/layout/Content'
import { VerticalSpace } from '~/sanity/blockSerializers/VerticalSpace'
import { EnhancedLink } from '~/sanity/blockSerializers/EnhancedLink'
import { CustomBlock } from '~/sanity/blockSerializers/CustomBlock'
import { VideoEmbed } from '~/sanity/blockSerializers/VideoEmbed'
import { ButtonLink } from '~/sanity/blockSerializers/ButtonLink'
import { Picture } from '~/sanity/blockSerializers/Picture'

type Props = {
  blocks: unknown[]
  noPadding?: boolean
}

export default ({ blocks, noPadding }: Props) => {
  return (
    <div css={noPadding ? noPaddingStyles : ''}>
      <BlockContent blocks={blocks} serializers={serializers} />
      <div css="clear: both" />
    </div>
  )
}

const noPaddingStyles = css`
  ${Content} {
    padding: 0;
  }
`

const {
  defaultSerializers: {
    block: DefaultBlockSerializer,
    list: DefaultListSerializer
  }
} = BlockContent

const ContentWrapper = (serializer: (props: any) => any) => (props: any) => {
  const unmodifiedOutput = serializer(props)

  if (
    props.node &&
    props.node._type === 'contentSection' &&
    props.node.fullWidth
  ) {
    return unmodifiedOutput
  }

  return <Content>{unmodifiedOutput}</Content>
}

const BlockSerializer = ContentWrapper(DefaultBlockSerializer)
const ListSerializer = ContentWrapper(DefaultListSerializer)

const serializers = {
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
  block: BlockSerializer,
  list: ListSerializer
}
