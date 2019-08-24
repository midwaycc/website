import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import Section from '~/layout/Section'
import ButtonLink from '~/components/ButtonLink'
import {
  MinistryPageQuery,
  SanitySlug,
  SanityPageSection
} from '~/types/graphqlTypes'

type Props = {
  data: MinistryPageQuery
  path: string
}

export default ({ data, path }: Props) => {
  if (!data.sanityMinistryPage) return null

  const { _rawContent, name, url, subLogo, sections } = data.sanityMinistryPage
  const parentURL = url && url.current
  if (!url || !parentURL || !sections) return null

  const getActiveSection = () =>
    sections.find(
      section => section && path === ministryPageSectionURL(url, section)
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

      <div css="margin-top: 1em">
        {sections.map(section => {
          if (!section || !section._key) return null
          const sectionURL = ministryPageSectionURL(url, section)

          return (
            <ButtonLink
              key={section._key}
              to={sectionURL}
              getProps={() => ({
                style: {
                  backgroundColor:
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
            </ButtonLink>
          )
        })}
      </div>

      <h1>{name}</h1>

      {!activeSection ? (
        <BlockContent blocks={_rawContent} />
      ) : (
        <>
          <h2>{activeSection.name}</h2>
          <p>
            Content for this section will go here once I figure out how to
            display it properly.
          </p>
          {/*<BlockContent blocks={activeSection.content} />*/}
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
