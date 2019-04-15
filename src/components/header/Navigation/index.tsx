import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Wide from './Wide'
import Narrow from './Narrow'
import { NavItem, hasSubItems, hasLink } from './types'

export default () => {
  const data = useStaticQuery(query)
  const navigationItems: NavItem[] = data.site.siteMetadata.navigation
  if (!validateNavigationItems(navigationItems)) {
    throw new Error('Navigation items are not valid!')
  }

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

function validateNavigationItems(navigationItems: NavItem[]) {
  return navigationItems.every(navItem => {
    if (!navItem.text) return false
    if (hasSubItems(navItem) && (navItem as any).link) return false
    if (hasLink(navItem) && (navItem as any).items) return false
    return true
  })
}
