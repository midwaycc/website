import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import RichContent from '~/components/RichContent'
import { SanityPost } from '~/types/graphqlTypes'

type Props = {
  post: Pick<
    SanityPost,
    'thumbnail' | 'title' | 'slug' | 'date' | '_rawSummary'
  >
}

export default ({ post }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target && (e.target as HTMLElement).tagName.toLowerCase() === 'a') {
      e.stopPropagation()
    }
  }

  return (
    <>
      {post.thumbnail && post.thumbnail.asset && (
        <Image
          css="margin-bottom: 1em"
          fluid={
            { ...post.thumbnail.asset.fluid, aspectRatio: 1 } as FluidObject
          }
        />
      )}
      <PostTitle>{post.title}</PostTitle>
      <div onClick={handleClick}>
        {post._rawSummary && (
          <RichContent fullWidth blocks={post._rawSummary} />
        )}
      </div>
    </>
  )
}

const PostTitle = styled.h3`
  text-decoration: none;
  color: rgb(35, 74, 77);
`
