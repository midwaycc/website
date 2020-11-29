import React from 'react'
import { graphql, Link } from 'gatsby'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { RichContent } from '~/sanity/RichContent'
import { SquareButton } from '~/components/SquareButton'
import { PageQuery } from '~/types/graphqlTypes'

type Props = {
  data: PageQuery
}

export default function Page({ data }: Props) {
  if (!data.sanityPage) {
    return null
  }

  const { name, _rawContent: content } = data.sanityPage

  return (
    <Section>
      <Content>
        <Link to="/">
          <SquareButton point="left">Home</SquareButton>
        </Link>
        <h1>{name}</h1>
      </Content>
      <RichContent blocks={content} />
    </Section>
  )
}

export const query = graphql`
  query Page($_id: String!) {
    sanityPage(_id: { eq: $_id }) {
      name
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`
