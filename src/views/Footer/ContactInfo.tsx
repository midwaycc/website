import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterBlock } from './FooterBlocks'
import { ChurchInfoQuery } from '~/types/graphqlTypes'

export function ContactInfo() {
  const data: ChurchInfoQuery = useStaticQuery(query)
  const { address, phone } = data.site?.siteMetadata?.church || {}

  if (!address || !phone) {
    return null
  }

  return (
    <Container>
      <p css="margin-top: 1em">
        <SocialLink
          logo="/logos/social/facebook.svg"
          url="https://www.facebook.com/midwaycommunitychurch/"
        />
        <SocialLink
          logo="/logos/social/instagram.svg"
          url="https://www.instagram.com/midwaycommunitychurch/"
          css="margin-left: 0.5em"
        />
      </p>
      <p>{address[0]}</p>
      <p>{address[1]}</p>
      <p>Church office: {phone}</p>
    </Container>
  )
}

const query = graphql`
  query ChurchInfo {
    site {
      siteMetadata {
        church {
          phone
          address
        }
      }
    }
  }
`

function SocialLink(props: { logo: string; url: string; className?: string }) {
  return (
    <a
      className={props.className}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img css="height: 42px; margin-top: 1em" src={props.logo} />
    </a>
  )
}

const Container = styled(FooterBlock)`
  text-align: center;

  p {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.1em;
  }
`
