import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import PostSummary from '~/components/PostSummary'
import media from '~/utils/media'

type Props = {
  post: RecentPostsQuery['allSanityPost']['nodes'] extends Array<infer T>
    ? T
    : never
  addToUrl?: string
}

export const PostCard = ({ post, addToUrl }: Props) => {
  if (!post.slug) return null

  const postUrl = `/posts/${post.slug.current}${addToUrl}`

  return (
    <LinkContainer to={postUrl}>
      <PostSummary post={post} />
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: white;
  padding: 1em;
  color: black;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);

  :hover {
    background-color: #eee;
  }

  width: 100%;
  margin-top: 1em;

  :first-of-type {
    margin-top: 0;
  }

  ${media.sm} {
    width: calc(50% - 0.5em);
    :nth-of-type(2) {
      margin-top: 0;
    }
    :nth-of-type(2n + 1) {
      margin-left: 0;
      margin-right: 0.5em;
    }
    :nth-of-type(2n + 2) {
      margin-left: 0.5em;
      margin-right: 0;
    }
  }

  ${media.lg} {
    width: calc(33.333% - 0.6666667em);

    :nth-of-type(3) {
      margin-top: 0;
    }
    :nth-of-type(3n + 1) {
      margin-left: 0;
      margin-right: 0.666667em;
    }
    :nth-of-type(3n + 2) {
      margin-left: 0.333333em;
      margin-right: 0.333333em;
    }
    :nth-of-type(3n + 3) {
      margin-left: 0.6666667em;
      margin-right: 0;
    }
  }

  ${media.xl} {
    width: calc(25% - 0.75em);

    :nth-of-type(4) {
      margin-top: 0;
    }
    :nth-of-type(4n + 1) {
      margin-left: 0;
      margin-right: 0.75em;
    }
    :nth-of-type(4n + 2) {
      margin-left: 0.25em;
      margin-right: 0.5em;
    }
    :nth-of-type(4n + 3) {
      margin-left: 0.5em;
      margin-right: 0.25em;
    }
    :nth-of-type(4n + 4) {
      margin-left: 0.75em;
      margin-right: 0;
    }
  }
`
