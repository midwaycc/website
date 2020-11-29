import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
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

const Container = styled.div`
  cursor: pointer;
`
