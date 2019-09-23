import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Image, { FixedObject } from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import { AllPostsQuery } from '~/types/graphqlTypes'
import Section from '~/layout/Section'
import { PostDate } from '~/templates/Post'

type Props = {
  data: AllPostsQuery
  pageContext: {
    perPage: number
    page: number
    offset: number
    isFirst: boolean
    isLast: boolean
  }
}

export default ({ data, pageContext }: Props) => {
  if (!data.allSanityPost || !data.allSanityPost.nodes) return null

  const { nodes: posts } = data.allSanityPost
  const { page, isFirst, isLast } = pageContext
  console.log(pageContext)

  return (
    <Section css="padding: 2em">
      <h1>All Updates</h1>
      <hr css="color: #eee; margin: 2em 0" />
      {posts.map(post => {
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
            <hr css="color: #eee; margin: 2em 0" />
          </>
        )
      })}
      <div
        style={{
          width: '100%',
          display: isFirst ? 'block' : 'flex',
          justifyContent: 'space-between',
          textAlign: isFirst ? 'right' : 'left'
        }}
      >
        {!isFirst && (
          <Link to={page === 2 ? '/posts' : `/posts/page/${page - 1}`}>
            &#8592; Newer Posts
          </Link>
        )}
        {!isLast && (
          <Link to={`/posts/page/${page + 1}`}>Older Posts &#8594;</Link>
        )}
      </div>
    </Section>
  )
}

export const query = graphql`
  query AllPosts($perPage: Int!, $offset: Int!) {
    allSanityPost(
      sort: { fields: date, order: DESC }
      limit: $perPage
      skip: $offset
    ) {
      nodes {
        _id
        title
        date
        thumbnail {
          asset {
            fixed(width: 75, height: 75) {
              ...GatsbySanityImageFixed
            }
          }
        }
        _rawSummary
        slug {
          current
        }
      }
    }
  }
`

const FlexRow = styled.div`
  display: flex;
`

const PostTitle = styled(Link)`
  font-size: 1.4em;
  line-height: 1.3em;
  font-weight: bold;
`
