import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { SquareButton } from '~/components/SquareButton'
import { CardContainer } from '~/components/CardContainer'
import { PostCard } from '~/components/PostCard'
import { AllPostsQuery } from '~/types/graphqlTypes'

export type Props = {
  data: AllPostsQuery
  path: string
  pageContext: {
    perPage: number
    page: number
    offset: number
    isFirst: boolean
    isLast: boolean
    onlyOne: boolean
  }
}

export default function PostsPage({ data, path, pageContext }: Props) {
  if (!data.allSanityPost || !data.allSanityPost.nodes) {
    return null
  }

  const { nodes: posts } = data.allSanityPost
  const { page, isFirst, isLast, onlyOne } = pageContext

  return (
    <Section>
      <Content>
        <Link to="/">
          <SquareButton point="left">Home</SquareButton>
        </Link>
        <h1 css="margin-bottom: -0.5em">Archive</h1>
        <CardContainer>
          {posts.map((post, i) => (
            <PostCard
              key={post._id || `post-${i}`}
              post={post}
              addToUrl={`?back=${path}`}
            />
          ))}
        </CardContainer>
        {onlyOne ? null : (
          <BackForwardContainer $isFirst={isFirst}>
            {!isFirst && (
              <Link to={page === 1 ? '/posts' : `/posts/page/${page - 1}`}>
                <SquareButton point="left">Newer</SquareButton>
              </Link>
            )}
            {!isLast && (
              <Link to={`/posts/page/${page + 1}`}>
                <SquareButton point="right">Older</SquareButton>
              </Link>
            )}
          </BackForwardContainer>
        )}
      </Content>
    </Section>
  )
}

export const query = graphql`
  query AllPosts($perPage: Int!, $offset: Int!) {
    allSanityPost(
      filter: { featured: { eq: false }, hidden: { ne: true } }
      sort: { fields: date, order: DESC }
      limit: $perPage
      skip: $offset
    ) {
      nodes {
        ...PostCardDetails
      }
    }
  }
`

const BackForwardContainer = styled.div<{ $isFirst: boolean }>`
  width: 100%;
  display: ${props => (props.$isFirst ? 'block' : 'flex')};
  justify-content: space-between;
  text-align: ${props => (props.$isFirst ? 'right' : 'left')};
  margin-top: 2em;
`
