import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Content from '~/layout/Content'
import { hiddenWhenMenuOpen } from '~/layout/Header/Navigation/Narrow'
import { ChurchInfoQuery } from '~/types/graphqlTypes'
import ContactForm from '~/views/ContactForm'
import media from '~/utils/media'

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
      <FooterBlocks>
        <FooterBlock>
          <ContactForm />
        </FooterBlock>
        <ContactInfo>
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
        </ContactInfo>
      </FooterBlocks>
      <FooterBlocks>
        <FooterBlock css="padding: 0 0.5em; padding-top: 3em; text-align: center">
          <p css="font-style: italic; margin: 0">
            &copy; {copyrightYears()} <strong>Midway Community Church.</strong>{' '}
            All Rights Reserved.
          </p>
        </FooterBlock>
      </FooterBlocks>
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
      <img css="height: 42px; margin-top: 1em" src={props.logo} />
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
  min-height: ${props => props.theme.footer.height};
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.color};
  margin: 0;
  padding-top: 4em;
  padding-bottom: 1em;
  ${hiddenWhenMenuOpen};
`

const FooterBlocks = styled(Content)`
  display: flex;
  flex-direction: column;

  ${media.md} {
    flex-direction: row;
  }
`

const FooterBlock = styled.div`
  width: 100%;
  padding: 0 0.5em;

  & ~ & {
    padding-top: 2em;
  }

  ${media.md} {
    width: 50%;

    & ~ & {
      padding-top: 0;
    }
  }
`

const ContactInfo = styled(FooterBlock)`
  text-align: center;

  p {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.1em;
  }
`
