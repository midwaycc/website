import React from 'react'
import { Link, graphql } from 'gatsby'
import { AllPostsQuery } from '~/types/graphqlTypes'
import Section from '~/layout/Section'
import { SquareButton } from '~/components/SquareButton'
import { PostsContainer } from '~/components/PostsContainer'
import { PostCard } from '~/components/PostCard'

export type Props = {
  data: AllPostsQuery
  pageContext: {
    perPage: number
    page: number
    offset: number
    isFirst: boolean
    isLast: boolean
  }
  title?: string
  addToUrl?: string
}

export default ({
  data,
  pageContext,
  title = 'Archive',
  addToUrl = ''
}: Props) => {
  if (!data.allSanityPost || !data.allSanityPost.nodes) return null

  const { nodes: posts } = data.allSanityPost
  const { page, isFirst, isLast } = pageContext

  return (
    <Section css="padding: 2em">
      <Link to="/">
        <SquareButton point="left">Home</SquareButton>
      </Link>
      <h1 css="margin-bottom: -0.5em">{title}</h1>
      <PostsContainer>
        {posts.map((post, i) => (
          <PostCard
            key={post._id || `post-${i}`}
            post={post}
            addToUrl={addToUrl}
          />
        ))}
      </PostsContainer>
      <div
        style={{
          width: '100%',
          display: isFirst ? 'block' : 'flex',
          justifyContent: 'space-between',
          textAlign: isFirst ? 'right' : 'left'
        }}
      >
        {!isFirst && (
          <Link to={page === 2 ? '/posts' : `/posts/page/${page - 1}`}>
            &#8592; Newer Posts
          </Link>
        )}
        {!isLast && (
          <Link to={`/posts/page/${page + 1}`}>Older Posts &#8594;</Link>
        )}
      </div>
    </Section>
  )
}

export const query = graphql`
  query AllPosts($perPage: Int!, $offset: Int!) {
    allSanityPost(
      filter: { featured: { eq: false } }
      sort: { fields: date, order: DESC }
      limit: $perPage
      skip: $offset
    ) {
      nodes {
        _id
        title
        date
        thumbnail {
          asset {
            fixed(width: 75, height: 75) {
              ...GatsbySanityImageFixed
            }
          }
        }
        _rawSummary
        slug {
          current
        }
      }
    }
  }
`
