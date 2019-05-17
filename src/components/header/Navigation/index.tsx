import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Wide from './Wide'
import Narrow from './Narrow'
import { NavItem, hasSubItems, hasLink } from './types'
import media from '~/utils/media'
import { css } from 'styled-components'

export default () => {
  const data = useStaticQuery(query)
  const navigationItems: NavItem[] = data.allNavYaml.edges[0].node.navigation
  if (!validateNavigationItems(navigationItems)) {
    throw new Error('Navigation items are not valid!')
  }

  return (
    <>
      <Wide
        navigationItems={navigationItems}
        css={css`
          display: none;
          ${media.lg} {
            display: flex;
          }
        `}
      />
      <Narrow
        navigationItems={navigationItems}
        css={css`
          display: flex;
          ${media.lg} {
            display: none;
          }
        `}
      />
    </>
  )
}

const query = graphql`
  query {
    allNavYaml {
      edges {
        node {
          navigation {
            link
            text
            items {
              link
              text
            }
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
