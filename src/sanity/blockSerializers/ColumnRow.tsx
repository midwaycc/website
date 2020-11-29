import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import { getSerializers } from '~/sanity/serializers'
import { SanityColumnRow } from '~/types/graphqlTypes'
import media from '~/utils/media'

type Props = {
  node?: SanityColumnRow
}

const serializers = getSerializers({ BlockContent, ColumnRow, nested: true })

export function ColumnRow({ node }: Props) {
  if (!node) return null

  const { columns } = node
  if (!columns) return null

  const renderedColumns = columns.map((column, i) => (
    <Column key={i} $ncols={columns.length}>
      <BlockContent blocks={column?.content || []} serializers={serializers} />
    </Column>
  ))

  return (
    <Container>
      <Columns>{renderedColumns}</Columns>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`

const Column = styled.div<{ $ncols: number }>`
  flex: 1 0
    calc(
      (${media.lg.width} - 2rem - ${props => props.$ncols - 1} * 1rem) /
        ${props => props.$ncols}
    );
  margin: 0.5rem;
`
