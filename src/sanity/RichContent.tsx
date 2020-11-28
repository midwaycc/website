import React from 'react'
import { css } from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import md5 from 'md5-slim'
import Content from '~/layout/Content'
import { ContentSection } from '~/sanity/blockSerializers/ContentSection'
import { ColumnRow } from '~/sanity/blockSerializers/ColumnRow'
import { getSerializers } from '~/sanity/serializers'

type Props = {
  blocks: unknown[]
  noPadding?: boolean
  className?: string
}

const serializers = getSerializers({ BlockContent, ContentSection, ColumnRow })

export default ({ blocks, noPadding, className }: Props) => {
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
