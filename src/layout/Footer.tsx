import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Content from '~/layout/Content'
import { hiddenWhenMenuOpen } from '~/layout/Header/Navigation/Narrow'
import { ChurchInfoQuery } from '~/types/graphqlTypes'

export default () => {
  const data: ChurchInfoQuery = useStaticQuery(query)
  if (
    !data.site ||
    !data.site.siteMetadata ||
    !data.site.siteMetadata.church ||
    !data.site.siteMetadata.church.address ||
    !data.site.siteMetadata.church.phone
  ) {
    return null
  }

  const { address, phone } = data.site.siteMetadata.church

  return (
    <Container>
      <FooterContent>
        <p>
          <strong>Midway Community Church.</strong> All Rights Reserved. &copy;{' '}
          {copyrightYears()}.
        </p>
        <p>{address.join(', ')}</p>
        <p>Church office: {phone}</p>
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
          {/* <SocialLink
            logo="/logos/social/twitter.svg"
            url="https://twitter.com/_midwayyouth"
            css="margin-left: 0.9em"
          /> */}
        </p>
      </FooterContent>
    </Container>
  )
}

const query = graphql`
  query ChurchInfo {
    site {
      siteMetadata {
        church {
          address
          phone
        }
      }
    }
  }
`

function SocialLink(props: { logo: string; url: string; className?: string }) {
  return (
    <a className={props.className} href={props.url} target="_blank">
      <img css="height: 30px; margin-top: 1em" src={props.logo} />
    </a>
  )
}

function copyrightYears() {
  const start = 2019
  const end = new Date().getFullYear()
  if (start === end) {
    return start
  }
  return `${start} - ${end}`
}

const Container = styled.footer`
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.color};
  ${hiddenWhenMenuOpen};
`

const FooterContent = styled(Content)`
  text-align: center;
  padding-top: 3em;
  height: 16em;
  color: #ddd;

  p {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  strong {
    color: white;
  }
`
