import React from 'react'
import { Link, graphql } from 'gatsby'
import { AllPostsQuery } from '~/types/graphqlTypes'
import Section from '~/layout/Section'
import PostSummary from '~/components/PostSummary'
import { SquareButton } from '~/components/SquareButton'

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
  title = 'News',
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
      <h1>{title}</h1>
      <hr css="color: #eee; margin: 2em 0" />
      {posts.map((post, i) => (
        <>
          <PostSummary
            key={post._id || `post-${i}`}
            post={post}
            addToUrl={addToUrl}
            darkBackground
          />
          <hr css="color: #eee; margin: 2em 0" />
        </>
      ))}
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
