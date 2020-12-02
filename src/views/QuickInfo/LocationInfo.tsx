import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Column } from './Columns'
import { ChurchLocationQuery } from '~/types/graphqlTypes'
import mapPin from '~/../static/images/map_pin.png'

export function LocationInfo() {
  const data: ChurchLocationQuery = useStaticQuery(query)
  const { address, googleMapsLink } = data.site?.siteMetadata?.church || {}
  if (!address || !googleMapsLink) {
    return null
  }

  return (
    <Column>
      <MapLink href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        <MapPin />
        {address.map((line, i) => (
          <AddressLine key={i}>{line}</AddressLine>
        ))}
      </MapLink>
    </Column>
  )
}

const query = graphql`
  query ChurchLocation {
    site {
      siteMetadata {
        church {
          address
          googleMapsLink
        }
      }
    }
  }
`

const MapLink = styled.a`
  display: inline-block;
  width: 100%;

  :not(:hover) {
    text-decoration: none;
    color: white;
  }
`

const MapPin = styled.img.attrs({ src: mapPin })`
  display: inline-block;
  height: 5rem;
  width: auto;
  margin-top: 1.75rem;
  margin-bottom: 1.5rem;
`

const AddressLine = styled.div`
  font-size: 1.5em;
  letter-spacing: 1px;

  & + & {
    margin-top: 0.5em;
  }
`
