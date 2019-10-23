import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import RichContent from '~/components/RichContent'
import Section from '~/layout/Section'
import RecentPosts from '~/views/RecentPosts'
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
  if (
    !data.sanityMinistryPage ||
    !data.allSanityPost ||
    !data.allSanityPost.nodes
  )
    return null

  const {
    _rawContent: content,
    name,
    url,
    subLogo,
    _rawSections
  } = data.sanityMinistryPage
  const { nodes: relatedPosts } = data.allSanityPost
  const sections = Array.isArray(_rawSections) ? _rawSections : []
  const parentURL = url && url.current
  if (!url || !parentURL) return null

  const getActiveSection = () =>
    sections.find(
      (section: SanityPageSection) =>
        section && path === ministryPageSectionURL(url, section)
    )
  const [activeSection, setActiveSection] = useState(getActiveSection())

  return (
    <>
      <Section css="padding: 2em">
        <Link css="display: block; margin-bottom: 1em" to="/">
          &#8592; Home
        </Link>
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
          <RichContent blocks={content} />
        ) : (
          <>
            <h2>{activeSection.name}</h2>
            {activeSection.content && (
              <RichContent blocks={activeSection.content} />
            )}
          </>
        )}
      </Section>
      {relatedPosts && relatedPosts.length > 0 && (
        <RecentPosts posts={relatedPosts} />
      )}
    </>
  )
}

export const query = graphql`
  query MinistryPage($_id: String!) {
    sanityMinistryPage(_id: { eq: $_id }) {
      name
      _rawContent(resolveReferences: { maxDepth: 10 })
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
      _rawSections(resolveReferences: { maxDepth: 10 })
      sections {
        _key
        name
        urlSuffix {
          current
        }
      }
    }
    allSanityPost(
      limit: 5
      sort: { fields: date, order: DESC }
      filter: { ministries: { elemMatch: { _id: { eq: $_id } } } }
    ) {
      nodes {
        _id
        title
        date
        thumbnail {
          asset {
            fixed(width: 75, height: 75) {
              ...GatsbySanityImageFixed
            }
          }
        }
        _rawSummary
        slug {
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
