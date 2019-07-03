import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Content from '~/layout/Content'
import Navigation from './Navigation'
import { NarrowMenuContents } from './Navigation/Narrow'
import Logo from './Logo'
import { NavItem, hasSubItems, hasLink } from './Navigation/types'

type Props = {
  children?: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default ({ children, className, onClick }: Props) => {
  const data = useStaticQuery(query)
  const navigationItems: NavItem[] = data.allNavYaml.edges[0].node.navigation

  if (!validateNavigationItems(navigationItems)) {
    throw new Error('Navigation items are not valid!')
  }

  return (
    <>
      <NarrowMenuContents navigationItems={navigationItems} />
      <Container className={className} onClick={onClick}>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <Navigation navigationItems={navigationItems} />
        </HeaderContent>
      </Container>
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

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: ${props => props.theme.header.shadow};
  height: ${props => props.theme.header.height}px;
  position: relative;
  z-index: 999;
`

const HeaderContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
`
