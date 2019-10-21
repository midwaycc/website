import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'
import RichContent from '~/components/RichContent'
import Section from '~/layout/Section'
import { PostQuery } from '~/types/graphqlTypes'

type Props = {
  data: PostQuery
}

export default ({ data }: Props) => {
  if (!data.sanityPost) return null

  const { title, date, _rawBody: body, _rawSummary: summary } = data.sanityPost

  if ((!body && !summary) || !title || !date) return null

  return (
    <Container>
      <Link to="/posts">&#8592; See all posts</Link>
      <PostTitle>{title}</PostTitle>
      <PostDate date={date} />
      <RichContent blocks={body || summary} />
    </Container>
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
  return format(new Date(date), 'MMMM do, y')
}

const Container = styled(Section)`
  padding: 2em;
`

const PostTitle = styled.h1`
  margin-bottom: 0.25em;
`
