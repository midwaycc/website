import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import Section from '~/layout/Section'

export default ({ data }) => {
  const { _rawContent: content, name, splashImage } = data.sanityMinistryPage

  return (
    <Section css="padding-top: 2em">
      <Image fixed={splashImage.asset.fixed} fadeIn durationFadeIn={1500} />
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
      splashImage {
        asset {
          url
          fixed(width: 950) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`
