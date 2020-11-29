import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
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
          <Image
            css="margin-bottom: 1em"
            fluid={
              { ...post.thumbnail.asset.fluid, aspectRatio: 1 } as FluidObject
            }
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
  color: rgb(35, 74, 77);
`
