import React from 'react'
import styled from 'styled-components'
import { navigate, graphql } from 'gatsby'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import { PostSummary } from '~/components/PostSummary'

type Props = {
  post: RecentPostsQuery['allSanityPost']['nodes'] extends Array<infer T>
    ? T
    : never
  addToUrl?: string
}

export function PostCard({ post, addToUrl }: Props) {
  if (!post.slug) return null

  const postUrl = `/posts/${post.slug.current}${addToUrl || ''}`

  return (
    <Container onClick={() => navigate(postUrl)}>
      <PostSummary post={post} />
    </Container>
  )
}

export const query = graphql`
  fragment PostCardDetails on SanityPost {
    _id
    date
    title
    _rawSummary(resolveReferences: { maxDepth: 10 })
    _rawThumbnailPoster(resolveReferences: { maxDepth: 10 })
    slug {
      current
    }
    thumbnail {
      asset {
        fluid(maxWidth: 400) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`

const Container = styled.div`
  cursor: pointer;
`
