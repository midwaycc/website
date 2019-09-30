import React from 'react'
import { Link } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import { PostDate } from '~/templates/Post'
import { SanityPost } from '~/types/graphqlTypes'

type Props = {
  post: Pick<
    SanityPost,
    'thumbnail' | 'title' | 'slug' | 'date' | '_rawSummary'
  >
}

export default ({ post }: Props) => {
  if (!post.slug) return null

  const postUrl = `/posts/${post.slug.current}`

  return (
    <>
      <FlexRow>
        {post.thumbnail && post.thumbnail.asset && (
          <Link to={postUrl}>
            <Image
              css="float: left; margin-right: 1em"
              fixed={post.thumbnail.asset.fixed as FixedObject}
            />
          </Link>
        )}
        <div css="flex: 1; display: flex; flex-direction: column">
          <PostTitle to={postUrl}>{post.title}</PostTitle>
          <PostDate date={post.date} />
        </div>
      </FlexRow>
      <BlockContent css="clearfix: both" blocks={post._rawSummary} />
    </>
  )
}

const FlexRow = styled.div`
  display: flex;
`

const PostTitle = styled(Link)`
  font-size: 1.4em;
  line-height: 1.3em;
  font-weight: bold;
`
