import React from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { RichContent } from '~/sanity/RichContent'
import { SquareButton } from '~/components/SquareButton'
import { PostQuery } from '~/types/graphqlTypes'

type Props = {
  data: PostQuery
}

export default function Post({ data }: Props) {
  if (!data.sanityPost) {
    return null
  }

  const { title, date, _rawBody: body, _rawSummary: summary } = data.sanityPost

  if ((!body && !summary) || !title || !date) return null

  const backLink =
    typeof window === 'undefined'
      ? '/posts'
      : '/' + (queryString.parse(location.search).back || '')

  return (
    <Section>
      <Content>
        <Link to={backLink}>
          <SquareButton point="left">Back</SquareButton>
        </Link>
        <PostTitle>{title}</PostTitle>
        <PostDate date={date} />
      </Content>
      <RichContent blocks={body || summary} />
    </Section>
  )
}

export const query = graphql`
  query Post($_id: String!) {
    sanityPost(_id: { eq: $_id }) {
      title
      date
      _rawBody(resolveReferences: { maxDepth: 10 })
      _rawSummary(resolveReferences: { maxDepth: 10 })
    }
  }
`

export const PostDate = ({ date }: { date: string }) => (
  <p css="margin-top: 0.25em; font-size: 0.8em; font-style: italic">
    Posted on {formatDate(date)}
  </p>
)

function formatDate(date: string) {
  return format(new Date(Date.parse(date) + 1000 * 60 * 60 * 12), 'MMMM do, y')
}

const PostTitle = styled.h1`
  margin-bottom: 0.25em;
`
