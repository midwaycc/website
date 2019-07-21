import React from 'react'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import Section from '~/layout/Section'

export default ({ pageContext }) => {
  return (
    <Section css="padding-top: 2em">
      <Image fixed={pageContext.splashImage.asset.fixed} />
      <h1>{pageContext.name}</h1>
      <BlockContent blocks={pageContext._rawContent} />
    </Section>
  )
}
