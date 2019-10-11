import React from 'react'
import { graphql } from 'gatsby'
import RichContent from '~/components/RichContent'
import Section from '~/layout/Section'
import { PageQuery } from '~/types/graphqlTypes'

type Props = {
  data: PageQuery
}

export default ({ data }: Props) => {
  if (!data.sanityPage) return null

  const { name, _rawContent: content } = data.sanityPage

  return (
    <Section css="padding: 2em">
      <h1>{name}</h1>
      <RichContent blocks={content} />
    </Section>
  )
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const query = graphql`
  query Page($_id: String!) {
    sanityPage(_id: { eq: $_id }) {
      name
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`
