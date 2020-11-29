import React from 'react'
import { RecentPosts } from '~/views/RecentPosts'
import { MinistryPageQuery } from '~/types/graphqlTypes'

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
