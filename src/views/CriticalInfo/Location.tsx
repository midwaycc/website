import React from 'react'
import InfoWidget from './InfoWidget'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import media from '~/utils/media'
import { ChurchLocationQuery } from '~/types/graphqlTypes'

export default () => {
  const data: ChurchLocationQuery = useStaticQuery(query)
  if (
    !data.site ||
    !data.site.siteMetadata ||
    !data.site.siteMetadata.church ||
    !data.site.siteMetadata.church.address
  )
    return null
  const [addressLine1, addressLine2] = data.site.siteMetadata.church.address

  return (
    <Container title="Location">
      <Address>
        {addressLine1}
        <br />
        {addressLine2}
      </Address>
      <Map
        src={data.site.siteMetadata.church.googleMapsEmbedSrc || undefined}
        width={250}
        height={250}
      />
      <noscript css="display: block; margin-top: calc(-250px)">
        <a href="https://goo.gl/maps/8BQDcF1DBxq" target="_blank">
          <img src="/fallback-map.jpg" width={250} />
        </a>
      </noscript>
    </Container>
  )
}

const query = graphql`
  query ChurchLocation {
    site {
      siteMetadata {
        church {
          address
          googleMapsEmbedSrc
        }
      }
    }
  }
`

const Container = styled(InfoWidget)``

const Map = styled.iframe`
  border: 0;
  margin-top: 2em;
`

const Address = styled.p`
  margin: 0;
  text-align: center;
`
