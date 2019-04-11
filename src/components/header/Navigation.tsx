import React from 'react'
import styled from 'styled-components'
import NavigationItem, { Props as NavProps } from './NavigationItem'
import { useStaticQuery, graphql } from 'gatsby'
import media from '~/utils/media'

export default () => {
  const data = useStaticQuery(query)

  return (
    <>
      <WideNavContainer>
        {data.site.siteMetadata.navigation.map((nav: NavProps, i: number) => (
          <NavigationItem key={i} {...nav} />
        ))}
      </WideNavContainer>
      <NarrowNavContainer>
        <div>narrow nav</div>
      </NarrowNavContainer>
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

const WideNavContainer = styled.ul`
  display: none;

  ${media.lg} {
    display: flex;
  }

  font-family: ${props => props.theme.header.font};
  font-size: 1.05em;
  color: ${props => props.theme.header.color};
  height: 100%;
  padding: 0;
  margin: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1000;
`

const NarrowNavContainer = styled.div`
  display: block;

  ${media.lg} {
    display: none;
  }
`
