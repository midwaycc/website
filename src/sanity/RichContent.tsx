import React from 'react'
import { css } from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import Content from '~/layout/Content'
import { ContentSection } from '~/sanity/blockSerializers/ContentSection'
import { getSerializers } from '~/sanity/serializers'

type Props = {
  blocks: unknown[]
  noPadding?: boolean
  className?: string
}

const serializers = getSerializers({ BlockContent, ContentSection })

export default ({ blocks, noPadding, className }: Props) => {
  return (
    <div className={className} css={noPadding ? noPaddingStyles : ''}>
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
