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

  if (!!post.oneClickLink) {
    return (
      <Container>
        <a
          style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
          href={post.oneClickLink}
          target="_blank"
        >
          <PostSummary post={post} />
        </a>
      </Container>
    )
  }

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
        gatsbyImageData(width: 400, aspectRatio: 1)
      }
    }
    oneClickLink
  }
`

const Container = styled.div`
  cursor: pointer;
`
