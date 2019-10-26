import React from 'react'
import InfoWidget from './InfoWidget'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { ChurchLocationQuery } from '~/types/graphqlTypes'
import { MapPin } from '~/components/MapPin'

const USE_GOOGLE_MAPS = false

export default () => {
  const data: ChurchLocationQuery = useStaticQuery(query)
  if (
    !data.site ||
    !data.site.siteMetadata ||
    !data.site.siteMetadata.church ||
    !data.site.siteMetadata.church.address
  ) {
    return null
  }

  const [addressLine1, addressLine2] = data.site.siteMetadata.church.address

  return (
    <Container title="Location">
      {!USE_GOOGLE_MAPS && <ShadowPin />}
      <Address href="https://goo.gl/maps/8BQDcF1DBxq" target="_blank">
        {addressLine1}
        <br />
        {addressLine2}
      </Address>
      {USE_GOOGLE_MAPS && (
        <>
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
        </>
      )}
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

const ShadowPin = styled(MapPin)`
  margin-bottom: 2em;
  filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.5));
`

const Map = styled.iframe`
  border: 0;
  margin-top: 2em;
`

const Address = styled.a`
  margin: 0;
  text-align: center;
  color: white;
  line-height: 1.5em;

  :hover {
    color: #9fb94b;
  }
`
