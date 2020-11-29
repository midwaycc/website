import React from 'react'
import { Link, graphql } from 'gatsby'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { SquareButton } from '~/components/SquareButton'
import { CardContainer } from '~/components/CardContainer'
import { PostCard } from '~/components/PostCard'
import { AllPostsQuery } from '~/types/graphqlTypes'

export type Props = {
  data: AllPostsQuery
  pageContext: {
    perPage: number
    page: number
    offset: number
    isFirst: boolean
    isLast: boolean
    onlyOne: boolean
  }
  title?: string
  urlPrefix?: string
}

export default function PostsPage({
  data,
  pageContext,
  title = 'Archive',
  urlPrefix = 'posts'
}: Props) {
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
        <h1 css="margin-bottom: -0.5em">{title}</h1>
        <CardContainer>
          {posts.map((post, i) => (
            <PostCard
              key={post._id || `post-${i}`}
              post={post}
              addToUrl={`?back=${urlPrefix}`}
            />
          ))}
        </CardContainer>
        <div
          style={{
            width: '100%',
            display: isFirst ? 'block' : 'flex',
            justifyContent: 'space-between',
            textAlign: isFirst ? 'right' : 'left',
            marginTop: '2em'
          }}
        >
          {!isFirst && !onlyOne && (
            <Link
              to={
                page === 2 ? `/${urlPrefix}` : `/${urlPrefix}/page/${page - 1}`
              }
            >
              <SquareButton point="left">Newer</SquareButton>
            </Link>
          )}
          {!isLast && !onlyOne && (
            <Link to={`/${urlPrefix}/page/${page + 1}`}>
              <SquareButton point="right">Older</SquareButton>
            </Link>
          )}
        </div>
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
        _id
        title
        date
        thumbnail {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawThumbnailPoster(resolveReferences: { maxDepth: 10 })
        _rawSummary
        slug {
          current
        }
      }
    }
  }
`
