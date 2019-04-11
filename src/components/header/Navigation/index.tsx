import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Wide from './Wide'
import Narrow from './Narrow'
import { NavItem } from './types'

export default () => {
  const data = useStaticQuery(query)
  const navigationItems: NavItem[] = data.site.siteMetadata.navigation

  return (
    <>
      <Wide navigationItems={navigationItems} />
      <Narrow navigationItems={navigationItems} />
    </>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        navigation {
          text
          link
          items {
            text
            link
          }
        }
      }
    }
  }
`
