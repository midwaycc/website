import React from 'react'
import { Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import RichContent from '~/components/RichContent'
import { SanityPost } from '~/types/graphqlTypes'

type Props = {
  post: Pick<
    SanityPost,
    'thumbnail' | 'title' | 'slug' | 'date' | '_rawSummary'
  >
  darkBackground?: boolean
  addToUrl?: string
}

export default ({ post, darkBackground, addToUrl = '' }: Props) => {
  if (!post.slug) return null

  const postUrl = `/posts/${post.slug.current}${addToUrl}`

  return (
    <>
      {post.thumbnail && post.thumbnail.asset && (
        <Link to={postUrl}>
          <Image
            css="margin-bottom: 1em"
            fluid={
              { ...post.thumbnail.asset.fluid, aspectRatio: 1 } as FluidObject
            }
          />
        </Link>
      )}
      <PostTitle to={postUrl} darkBackground={darkBackground}>
        {post.title}
      </PostTitle>
      <RichContent blocks={post._rawSummary} />
    </>
  )
}

const PostTitle = styled(({ darkBackground, ...otherProps }) => (
  <Link {...otherProps} />
))<{ darkBackground?: boolean }>`
  font-family: 'Brandon Grotesque';
  font-size: 1.4em;
  line-height: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: ${props => (props.darkBackground ? 'white' : 'rgb(35, 74, 77)')};

  :hover {
    color: #9fb94b;
    /* color: #2b6667; */
    /* color: ${props =>
      props.darkBackground ? 'white' : 'rgb(35, 74, 77)'}; */
  }
`
