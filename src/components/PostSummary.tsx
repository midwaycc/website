import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { RichContent } from '~/sanity/RichContent'
import { Poster } from './Poster'
import { SanityPost } from '~/types/graphqlTypes'

type Props = {
  post: Pick<
    SanityPost,
    | 'thumbnail'
    | '_rawThumbnailPoster'
    | 'title'
    | 'slug'
    | 'date'
    | '_rawSummary'
  >
}

export function PostSummary({ post }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target && (e.target as HTMLElement).tagName.toLowerCase() === 'a') {
      e.stopPropagation()
    }
  }

  if (post._rawThumbnailPoster) {
    console.log('THUMBNAIL_POSTER', post)
  }

  return (
    <>
      {post._rawThumbnailPoster ? (
        <Poster
          css="margin: 0"
          aspectRatio={1}
          poster={post._rawThumbnailPoster}
        />
      ) : (
        post.thumbnail &&
        post.thumbnail.asset && (
          <GatsbyImage
            alt="Post thumbnail"
            image={post.thumbnail.asset.gatsbyImageData}
            css="margin-bottom: 1em"
          />
        )
      )}
      <PostTitle>{post.title}</PostTitle>
      <div onClick={handleClick}>
        {post._rawSummary && (
          <RichContent noPadding blocks={post._rawSummary} />
        )}
      </div>
    </>
  )
}

export const PostTitle = styled.h3`
  text-decoration: none;
  color: ${props => props.theme.colors.darkTeal.hex};
`
