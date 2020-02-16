import React from 'react'
import { Link } from 'gatsby'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import PostSummary from '~/components/PostSummary'

type Props = {
  post: RecentPostsQuery['allSanityPost']['nodes'] extends Array<infer T>
    ? T
    : never
  addToUrl?: string
}

export const PostCard = ({ post, addToUrl }: Props) => {
  if (!post.slug) return null

  return (
    <Link to={`/posts/${post.slug.current}${addToUrl || ''}`}>
      <PostSummary post={post} />
    </Link>
  )
}
