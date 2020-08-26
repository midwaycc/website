import React from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'
import Content from '~/layout/Content'
import { VerticalSpace } from '~/sanity/blockSerializers/VerticalSpace'
import { EnhancedLink } from '~/sanity/blockSerializers/EnhancedLink'
import { CustomBlock } from '~/sanity/blockSerializers/CustomBlock'
import { VideoEmbed } from '~/sanity/blockSerializers/VideoEmbed'
import { ButtonLink } from '~/sanity/blockSerializers/ButtonLink'
import { ButtonRow } from '~/sanity/blockSerializers/ButtonRow'
import { Picture } from '~/sanity/blockSerializers/Picture'
import { ColumnRow } from '~/sanity/blockSerializers/ColumnRow'

export function getSerializers({
  BlockContent,
  nested,
  // Need to pass this in to avoid circular dependency
  ContentSection
}: {
  BlockContent: typeof SanityBlockContent
  nested?: boolean
  ContentSection?: unknown
}) {
  const {
    defaultSerializers: {
      block: DefaultBlockSerializer,
      list: DefaultListSerializer
    }
  } = BlockContent

  const ContentWrapper = (serializer: (props: any) => any) => (props: any) => {
    const unmodifiedOutput = serializer(props)

    if (props.node && props.node._type === 'contentSection') {
      return unmodifiedOutput
    }

    const { _type, style } = props.node || {}
    const topLevelProps = {
      'data-t': _type,
      'data-s': style
    }

    return <Content {...topLevelProps}>{unmodifiedOutput}</Content>
  }

  const BlockSerializer = ContentWrapper(DefaultBlockSerializer)
  const ListSerializer = ContentWrapper(DefaultListSerializer)

  return {
    types: {
      block: CustomBlock,
      verticalSpace: VerticalSpace,
      videoEmbed: VideoEmbed,
      buttonLink: ButtonLink,
      buttonRow: ButtonRow,
      picture: Picture,
      // These types can't nest, so no need to define a serializer for them
      // if we are in a nested context.
      contentSection: nested ? undefined : ContentSection,
      columnRow: nested ? undefined : ColumnRow
    },
    marks: {
      link: EnhancedLink
    },
    // When nesting, we don't want to double-wrap with <Content>
    block: nested ? DefaultBlockSerializer : BlockSerializer,
    list: nested ? DefaultListSerializer : ListSerializer
  }
}
