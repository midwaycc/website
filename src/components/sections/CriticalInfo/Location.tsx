import React from 'react'
import InfoWidget from './InfoWidget'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          googleMapsEmbedSrc
        }
      }
    }
  `)

  return (
    <InfoWidget title="Location">
      <Address>
        3365 Francis Road
        <br />
        Alpharetta, Georgia 30004
      </Address>
      <Map
        src={data.site.siteMetadata.googleMapsEmbedSrc}
        width={250}
        height={250}
      />
    </InfoWidget>
  )
}

const Map = styled.iframe`
  border: 0;
  margin-top: 2em;
`

const Address = styled.p`
  margin: 0;
  text-align: center;
`
