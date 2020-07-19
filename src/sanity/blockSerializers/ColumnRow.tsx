import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import { getSerializers } from '~/sanity/serializers'
import { SanityColumnRow } from '~/types/graphqlTypes'

type Props = {
  node?: SanityColumnRow
}

const serializers = getSerializers({ nested: true })

export function ColumnRow({ node }: Props) {
  if (!node) return null

  const { columns } = node
  if (!columns) return null

  const renderedColumns = columns.map((column, i) => (
    <div key={i}>
      <BlockContent blocks={column?.content || []} serializers={serializers} />
    </div>
  ))

  return <Container>{renderedColumns}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-between;

  & > div {
    flex: 1;

    & + div {
      margin-left: 1rem;
    }
  }
`
