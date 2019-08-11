import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Content from '~/layout/Content'
import { hiddenAbove } from '~/utils/visibility'
import Navigation, { BREAKPOINT } from './Navigation'
import { NarrowMenuContents, NarrowMenuToggle } from './Navigation/Narrow'
import Logo from './Logo'
import { NavItem, hasSubItems, hasLink } from './Navigation/types'
import { HeaderQuery } from '~/types/graphqlTypes'

type Props = {
  children?: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default ({ children, className, onClick }: Props) => {
  const data: HeaderQuery = useStaticQuery(query)
  console.log(data)
  if (!data.allNavYaml) return null
  const navigationItems = data.allNavYaml.nodes[0].navigation as NavItem[]

  if (!validateNavigationItems(navigationItems)) {
    throw new Error('Navigation items are not valid!')
  }

  return (
    <>
      <NarrowMenuToggle css={hiddenAbove(BREAKPOINT, 'block')} />
      <Container className={className} onClick={onClick}>
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
    allNavYaml {
      nodes {
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
    sanityNavigation(title: { eq: "Main Navigation" }) {
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
      text
      link
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
`
