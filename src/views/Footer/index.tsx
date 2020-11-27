import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Content from '~/layout/Content'
import { hiddenWhenMenuOpen } from '~/views/Header/Navigation/Narrow'
import { ChurchInfoQuery } from '~/types/graphqlTypes'
import { ContactForm } from './ContactForm'
import media from '~/utils/media'
import footerLogo from '~/../static/logos/rgb/icon/mcc_icon_rgb.png'

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

export default () => {
  const data: ChurchInfoQuery = useStaticQuery(query)
  const { address, phone } = data.site?.siteMetadata?.church || {}
  if (!address || !phone) return null

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
        <FooterBlock
          css={css`
            padding: 0 0.5em;
            padding-top: 9em;
            text-align: center;
            z-index: 1;

            ${media.md} {
              padding-top: 3em;
            }
          `}
        >
          <p
            css={css`
              font-style: italic;
              margin: 0;
              transform: translateY(0.8em);

              ${media.md} {
                transform: translateY(0);
              }
            `}
          >
            &copy; {copyrightYears()} <strong>Midway Community Church.</strong>{' '}
            All Rights Reserved.
          </p>
        </FooterBlock>
        <FooterBlock
          css={css`
            position: relative;
          `}
        >
          <LogoIcon>
            <img
              src={footerLogo}
              css={css`
                width: 100%;
              `}
            />
          </LogoIcon>
        </FooterBlock>
      </FooterBlocks>
    </Container>
  )
}

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

function copyrightYears() {
  const start = 2019
  const end = new Date().getFullYear()
  return start === end ? start : `${start} - ${end}`
}

const Container = styled.footer`
  min-height: ${props => props.theme.footer.height};
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.color};
  margin: 0;
  padding: 4em 0 1em 0;
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

const LogoIcon = styled.div`
  position: absolute;
  bottom: -1em;
  left: calc(50% - 100px);
  overflow: hidden;
  width: 200px;
  height: 181px;
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
