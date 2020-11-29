import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Content } from '~/layout/Content'
import { Navigation, BREAKPOINT } from './Navigation'
import { NarrowMenuContents } from './Navigation/Narrow/MenuContents'
import { NarrowMenuToggle } from './Navigation/Narrow/MenuToggle'
import { HeaderLogo } from './Logo'
import { hiddenAbove } from '~/utils/visibility'
import {
  navigationItemsFromSanityItems,
  validateNavigationItems,
  SanityItems
} from './navigationItems'
import { HeaderQuery } from '~/types/graphqlTypes'

export function Header() {
  const data: HeaderQuery = useStaticQuery(query)
  if (!data.sanityNavigation) return null
  const sanityItems = data.sanityNavigation.items
  if (!sanityItems) return null
  const navigationItems = navigationItemsFromSanityItems(
    sanityItems as SanityItems
  )

  if (!validateNavigationItems(navigationItems)) {
    throw new Error('Navigation items are not valid!')
  }

  return (
    <>
      <NarrowMenuToggle css={hiddenAbove(BREAKPOINT, 'block')} />
      <Container>
        <HeaderContent>
          <Link to="/">
            <HeaderLogo />
          </Link>
          <Navigation navigationItems={navigationItems} />
        </HeaderContent>
      </Container>
      {/* Due to z-index and SSR (which rules out a Portal),
          this must be rendered after the header. */}
      <NarrowMenuContents navigationItems={navigationItems} />
    </>
  )
}

const query = graphql`
  query Header {
    sanityNavigation {
      items {
        __typename
        ...AnyNavLink
        ... on SanityNestedMenu {
          text
          items {
            ...AnyNavLink
          }
        }
      }
    }
  }

  fragment AnyNavLink on SanityPlainOrPageLink {
    __typename
    ... on SanityPlainLink {
      link
      text
      sameWindow
    }
    ... on SanityPageLink {
      text
      page {
        ... on SanityPage {
          url {
            current
          }
        }
        ... on SanityMinistryPage {
          url {
            current
          }
        }
      }
    }
  }
`

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: ${props => props.theme.header.shadow};
  height: ${props => props.theme.header.height}px;
  position: relative;
  z-index: 2;
`

const HeaderContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding: 0;
`
