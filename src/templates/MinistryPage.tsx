import React from 'react'
import { graphql } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import Section from '~/layout/Section'
import { Query } from '~/types/graphqlTypes'

type Props = {
  data: Query
}

export default ({ data }: Props) => {
  if (!data.sanityMinistryPage) return

  const { _rawContent: content, name, subLogo } = data.sanityMinistryPage

  return (
    <Section css="padding: 2em">
      {subLogo && subLogo.asset && (
        <Image
          fluid={(subLogo.asset.fluid as FluidObject) || undefined}
          style={{ maxWidth: 400 }}
          fadeIn
        />
      )}
      <h1>{name}</h1>
      <BlockContent blocks={content} />
    </Section>
  )
}

export const query = graphql`
  query($_id: String!) {
    sanityMinistryPage(_id: { eq: $_id }) {
      name
      _rawContent
      subLogo {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
