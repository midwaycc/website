import React from 'react'
import { graphql } from 'gatsby'
import Hero from '~/views/Hero'
import CriticalInfo from '~/views/CriticalInfo'

type Props = {
  data: any
}

export default ({ data }: Props) => {
  return (
    <>
      <Hero />
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
