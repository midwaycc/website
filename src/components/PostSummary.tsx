import React from 'react'
import { Link } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'
import styled from 'styled-components'
import RichContent from '~/components/RichContent'
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
      <RichContent blocks={post._rawSummary} />
    </>
  )
}

const FlexRow = styled.div`
  display: flex;
`

const PostTitle = styled(Link)`
  font-family: 'Brandon Grotesque';
  font-size: 1.4em;
  line-height: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: black;

  :hover {
    color: #2b6667;
  }
`
