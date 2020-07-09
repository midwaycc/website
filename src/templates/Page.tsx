import React from 'react'
import { graphql, Link } from 'gatsby'
import RichContent from '~/components/RichContent'
import Section from '~/layout/Section'
import { PageQuery } from '~/types/graphqlTypes'
import { SquareButton } from '~/components/SquareButton'
import Content from '~/layout/Content'

type Props = {
  data: PageQuery
}

export default ({ data }: Props) => {
  if (!data.sanityPage) return null

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
