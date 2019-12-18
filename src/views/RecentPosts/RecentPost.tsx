import React from 'react'
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
  return (
    <Container>
      <PostSummary post={post} />
    </Container>
  )
}

const Container = styled.div`
  display: block;
  text-decoration: none;
  background-color: white;
  margin-left: 1em;
  margin-top: 1em;
  padding: 1em;
  color: black;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);

  :hover {
    background-color: white;
  }

  width: calc(100% - 2em);

  ${media.lg} {
    width: calc(50% - 1.5em);
  }
`
