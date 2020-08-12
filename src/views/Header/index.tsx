import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Content from '~/layout/Content'
import { hiddenAbove } from '~/utils/visibility'
import Navigation, { BREAKPOINT } from './Navigation'
import { NarrowMenuContents, NarrowMenuToggle } from './Navigation/Narrow'
import Logo from './Logo'
import { NavItem, hasSubItems, hasLink } from './Navigation/types'
import {
  HeaderQuery,
  SanityNavigation,
  SanityPlainLink,
  SanityPageLink,
  SanityNestedMenu
} from '~/types/graphqlTypes'

type SanityItems = SanityNavigation['items']

export default () => {
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
            <Logo />
          </Link>
          <Navigation navigationItems={navigationItems} />
        </HeaderContent>
      </Container>
      <NarrowMenuContents navigationItems={navigationItems} />
    </>
  )
}

const query = graphql`
  query Header {
    sanityNavigation(_id: { eq: "39e3e2cd-f904-4c55-aa97-df25ee541932" }) {
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

function validateNavigationItems(navigationItems: NavItem[]) {
  return navigationItems.every(navItem => {
    if (!navItem.text) return false
    if (hasSubItems(navItem) && (navItem as any).link) return false
    if (hasLink(navItem) && (navItem as any).items) return false
    return true
  })
}

function navigationItemsFromSanityItems(items: SanityItems): NavItem[] {
  if (!items) return []

  return items
    .map(item => {
      if (!item) return undefined
      if (!item.__typename) return undefined
      switch (item.__typename) {
        case 'SanityPlainLink':
          return navigationItemFromSanityPlainLink(item)
        case 'SanityPageLink':
          return navigationItemFromSanityPageLink(item)
        case 'SanityNestedMenu':
          return navigationItemsFromSanityNestedMenu(item)
      }
    })
    .filter(Boolean) as NavItem[]
}

function navigationItemFromSanityPlainLink(item: SanityPlainLink) {
  return { text: item.text, link: item.link, sameWindow: item.sameWindow }
}

function navigationItemFromSanityPageLink(item: SanityPageLink) {
  if (!item.page || !item.page.url || !item.page.url.current) return undefined
  return { text: item.text, link: item.page.url.current }
}

function navigationItemsFromSanityNestedMenu(menu: SanityNestedMenu) {
  return {
    text: menu.text,
    items: navigationItemsFromSanityItems(menu.items)
  }
}

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
