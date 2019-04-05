import React from 'react'
import { graphql } from 'gatsby'
import Slideshow from '~/components/sections/Slideshow'
import CriticalInfo from '~/components/sections/CriticalInfo'

type Props = {
  data: any
}

export default ({ data }: Props) => {
  const { title, subtitle } = data.site.siteMetadata.text

  return (
    <>
      <Slideshow title={title} subtitle={subtitle} />
      <CriticalInfo />
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        text {
          title
          subtitle
        }
      }
    }
  }
`
