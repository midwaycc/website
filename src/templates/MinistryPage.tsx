import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import Section from '~/layout/Section'
import {
  MinistryPageQuery,
  SanitySlug,
  SanityPageSection
} from '~/types/graphqlTypes'
import media from '~/utils/media'

type Props = {
  data: MinistryPageQuery
  path: string
}

export default ({ data, path }: Props) => {
  if (!data.sanityMinistryPage) return null

  const {
    _rawContent: content,
    name,
    url,
    subLogo,
    _rawSections: sections
  } = data.sanityMinistryPage
  const parentURL = url && url.current
  if (!url || !parentURL || !sections) return null

  const getActiveSection = () =>
    sections.find(
      (section: SanityPageSection) =>
        section && path === ministryPageSectionURL(url, section)
    )
  const [activeSection, setActiveSection] = useState(getActiveSection())

  return (
    <Section css="padding: 2em">
      {subLogo && subLogo.asset && (
        <Link
          to={parentURL}
          onClick={e => {
            hijackURL(e, parentURL)
            setActiveSection(undefined)
          }}
        >
          <Image
            fluid={(subLogo.asset.fluid as FluidObject) || undefined}
            style={{ maxWidth: 400 }}
            fadeIn
          />
        </Link>
      )}

      <SectionLinkContainer>
        {sections.map((section: SanityPageSection) => {
          if (!section || !section._key) return null
          const sectionURL = ministryPageSectionURL(url, section)

          return (
            <SectionLink
              key={section._key}
              to={sectionURL}
              getProps={() => ({
                style: {
                  backgroundColor:
                    typeof window !== 'undefined' &&
                    window.location.pathname === sectionURL
                      ? '#9fb94b'
                      : '#099799'
                }
              })}
              onClick={e => {
                hijackURL(e, sectionURL)
                setActiveSection(section)
              }}
            >
              {section.name}
            </SectionLink>
          )
        })}
      </SectionLinkContainer>

      <h1>{name}</h1>

      {!activeSection ? (
        <BlockContent blocks={content} />
      ) : (
        <>
          <h2>{activeSection.name}</h2>
          <BlockContent blocks={activeSection.content} />
        </>
      )}
    </Section>
  )
}

export const query = graphql`
  query MinistryPage($_id: String!) {
    sanityMinistryPage(_id: { eq: $_id }) {
      name
      _rawContent
      subLogo {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      url {
        current
      }
      _rawSections
      sections {
        _key
        name
        urlSuffix {
          current
        }
      }
    }
  }
`

export const ministryPageSectionURL = (
  baseURL: Pick<SanitySlug, 'current'>,
  section: Pick<SanityPageSection, 'urlSuffix'>
) => {
  if (!section.urlSuffix) return baseURL.current || '/'
  return `${baseURL.current}/${section.urlSuffix.current}`
}

const hijackURL = (e: React.MouseEvent, url: string) => {
  e.stopPropagation()
  e.preventDefault()
  window.history.pushState(window.history.state, document.title, url)
}

const HORIZONTAL_SPACE = '0.75em'
const VERTICAL_SPACE = '0.75em'

const SectionLinkContainer = styled.div`
  margin-top: calc(1em - ${VERTICAL_SPACE});
  display: flex;
  flex-wrap: wrap;
  margin-left: -${HORIZONTAL_SPACE};
`

const SectionLink = styled(Link)<{ stacked?: boolean }>`
  color: white;
  background-color: #099799;
  text-decoration: none;
  text-align: center;
  display: ${props => (props.stacked ? 'block' : 'inline-block')};
  padding: 0.5em 1em;
  border-radius: 1.5em;
  flex-grow: 1;
  margin-left: ${HORIZONTAL_SPACE};
  margin-top: ${VERTICAL_SPACE};
  max-width: 12em;
`
