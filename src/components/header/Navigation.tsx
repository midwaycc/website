import React from 'react'
import styled from 'styled-components'
import NavigationItem, { Props as NavProps } from './NavigationItem'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(query)

  return (
    <Container>
      {data.site.siteMetadata.navigation.map((nav: NavProps, i: number) => (
        <NavigationItem key={i} {...nav} />
      ))}
    </Container>
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

const Container = styled.ul`
  font-family: ${props => props.theme.header.font};
  font-size: 1.05em;
  color: ${props => props.theme.header.color};
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1000;
`
