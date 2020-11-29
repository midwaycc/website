import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import md5 from 'md5-slim'
import { css } from 'styled-components'
import { Content } from '~/layout/Content'
import { getSerializers } from '~/sanity/serializers'
import { ContentSection } from '~/sanity/blockSerializers/ContentSection'
import { ColumnRow } from '~/sanity/blockSerializers/ColumnRow'

type Props = {
  blocks: unknown[]
  noPadding?: boolean
  className?: string
}

const serializers = getSerializers({ BlockContent, ContentSection, ColumnRow })

export function RichContent({ blocks, noPadding, className }: Props) {
  // Ensure that in development/preview, changes to content force a re-render
  const key =
    process.env.NODE_ENV === 'development' ? md5(JSON.stringify(blocks)) : 'key'

  return (
    <div className={className} css={noPadding ? noPaddingStyles : ''}>
      <BlockContent key={key} blocks={blocks} serializers={serializers} />
      <div css="clear: both" />
    </div>
  )
}

const noPaddingStyles = css`
  ${Content} {
    padding: 0;
  }
`
