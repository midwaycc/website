import React from 'react'
import { graphql } from 'gatsby'
import { GetInvolvedPostsQuery } from '~/types/graphqlTypes'
import PostsPage, { Props as PostsPageProps } from '~/templates/PostsPage'

type Props = {
  data: GetInvolvedPostsQuery
  pageContext: PostsPageProps['pageContext']
}

export default ({ data, pageContext }: Props) => {
  return (
    <PostsPage
      title="Get Involved"
      data={data}
      pageContext={pageContext}
      urlPrefix="get-involved"
    />
  )
}

export const query = graphql`
  query GetInvolvedPosts($perPage: Int!, $offset: Int!) {
    allSanityPost(
      sort: { fields: date, order: DESC }
      limit: $perPage
      skip: $offset
      filter: { ministries: { elemMatch: { name: { eq: "Get Involved" } } } }
    ) {
      nodes {
        _id
        title
        date
        thumbnail {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawThumbnailPoster(resolveReferences: { maxDepth: 10 })
        _rawSummary
        slug {
          current
        }
      }
    }
  }
`
