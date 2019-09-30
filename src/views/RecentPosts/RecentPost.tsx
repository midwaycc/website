import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import PostSummary from '~/components/PostSummary'
import media from '~/utils/media'

type Props = {
  post: RecentPostsQuery['allSanityPost']['nodes'] extends Array<infer T>
    ? T
    : never
}

export default ({ post }: Props) => {
  if (!post.slug) return null

  return (
    <Container to={`/posts/${post.slug.current}`}>
      <PostSummary post={post} />
    </Container>
  )
}

const Container = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: #eee;
  margin-left: 1em;
  margin-top: 1em;
  padding: 1em;
  color: black;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);

  :hover {
    background-color: white;
  }

  width: calc(100% - 2em);

  ${media.lg} {
    width: calc(50% - 1.5em);
  }
`
