import React from 'react'
import { MinistryPageQuery } from '~/types/graphqlTypes'
import RecentPosts from '~/views/RecentPosts'

type Props = {
  data: MinistryPageQuery
}

export function RelatedPosts({ data }: Props) {
  if (
    !data.allSanityPost ||
    !data.allSanityPost.nodes ||
    !data.allSanityPost.nodes.length
  ) {
    return null
  }

  return <RecentPosts posts={data.allSanityPost.nodes} />
}
