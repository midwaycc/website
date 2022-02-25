import React from 'react'
import styled, { css, CSSObject } from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import md5 from 'md5-slim'
import { Content } from '~/layout/Content'
import { getSerializers } from '~/sanity/serializers'
import { ContentSection } from '~/sanity/blockSerializers/ContentSection'
import { ColumnRow } from '~/sanity/blockSerializers/ColumnRow'

type Props = {
  blocks: unknown[]
  noPadding?: boolean
  className?: string
  style?: CSSObject
}

const serializers = getSerializers({ BlockContent, ContentSection, ColumnRow })

export function RichContent({ blocks, noPadding, className, style }: Props) {
  // Ensure that in development/preview, changes to content force a re-render
  const key =
    process.env.NODE_ENV === 'development' ? md5(JSON.stringify(blocks)) : 'key'

  return (
    <Container className={className} style={style} $noPadding={noPadding}>
      <BlockContent key={key} blocks={blocks} serializers={serializers} />
      <Clear />
    </Container>
  )
}

const Container = styled.div<{ $noPadding?: boolean }>`
  ${props =>
    props.$noPadding
      ? css`
          ${Content} {
            padding: 0;
          }
        `
      : ''}
`

const Clear = styled.div`
  clear: both;
`
