import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import Section from '~/layout/Section'

export default ({ data }) => {
  const { _rawContent: content, name, subLogo } = data.sanityMinistryPage

  return (
    <Section css="padding: 2em">
      <Image
        fluid={subLogo.asset.fluid}
        style={{ maxWidth: 400 }}
        fadeIn
        durationFadeIn={1500}
      />
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
