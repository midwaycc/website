import React from 'react'
import { graphql } from 'gatsby'
import { RelatedPosts } from './RelatedPosts'
import { SectionContent } from './SectionContent'
import { getMinistryRootURL } from './TopNav'
import { MinistryPageQuery } from '~/types/graphqlTypes'

type Props = {
  data: MinistryPageQuery
  path: string
}

export default function MinistryPage({ data, path }: Props) {
  const ministryRootURL = getMinistryRootURL(path)

  if (!ministryRootURL || !data.sanityMinistryPage) {
    return null
  }

  return (
    <>
      {/* The TopNav component is rendered from the Layout wrapper
          so that it doesn't re-render on page transitions */}
      <SectionContent
        data={data}
        path={path}
        ministryRootURL={ministryRootURL}
      />
      <RelatedPosts data={data} />
    </>
  )
}

export const query = graphql`
  query MinistryPage($_id: String!) {
    sanityMinistryPage(_id: { eq: $_id }) {
      name
      _rawContent(resolveReferences: { maxDepth: 10 })
      subLogo {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      subLogoWidth
      url {
        current
      }
      _rawSections(resolveReferences: { maxDepth: 10 })
      sections {
        _key
        name
        urlSuffix {
          current
        }
      }
    }
    allSanityPost(
      limit: 5
      sort: { fields: date, order: DESC }
      filter: { ministries: { elemMatch: { _id: { eq: $_id } } } }
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
