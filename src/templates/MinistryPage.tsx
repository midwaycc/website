import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import RichContent from '~/sanity/RichContent'
import Section from '~/layout/Section'
import RecentPosts from '~/views/RecentPosts'
import { PillLinkContainer, PillLink } from '~/components/Pills'
import {
  MinistryPageQuery,
  SanitySlug,
  SanityPageSection
} from '~/types/graphqlTypes'
import styled, { css } from 'styled-components'
import { raggedEdgeGradient } from '~/views/QuickInfo'
import { SquareButton } from '~/components/SquareButton'
import Content from '~/layout/Content'

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
    // name,
    url,
    subLogo,
    subLogoWidth,
    _rawSections
  } = data.sanityMinistryPage
  const { nodes: relatedPosts } = data.allSanityPost
  const sections = Array.isArray(_rawSections)
    ? _rawSections.filter((section: SanityPageSection) => !section.hidden)
    : []
  const parentURL = url && url.current
  if (!url || !parentURL) return null

  const getActiveSection = (pathname: string = path) =>
    sections.find(
      (section: SanityPageSection) =>
        section && pathname === ministryPageSectionURL(url, section)
    )
  const [activeSection, setActiveSection] = useState(getActiveSection())

  useEffect(() => {
    setActiveSection(
      getActiveSection(typeof window != null ? window.location.pathname : path)
    )
  }, [sections])

  return (
    <>
      <TopNav color="white">
        <Link to="/">
          <SquareButton dark thick point="left" css="margin-bottom: 1em">
            Home
          </SquareButton>
        </Link>
        {subLogo && subLogo.asset && (
          <Link
            to={parentURL}
            onClick={e => {
              hijackURL(e, parentURL)
              setActiveSection(undefined)
            }}
          >
            <SubLogo
              fluid={(subLogo.asset.fluid as FluidObject) || undefined}
              width={subLogoWidth || 0}
            />
          </Link>
        )}

        {sections.length > 0 && (
          <PillLinkContainer>
            <SectionLink
              key="main"
              to={parentURL}
              onClick={e => {
                hijackURL(e, parentURL)
                setActiveSection(undefined)
              }}
              getProps={() => ({
                style: {
                  backgroundColor:
                    typeof window !== 'undefined' &&
                    window.location.pathname === parentURL
                      ? '#9fb94b'
                      : '#099799'
                }
              })}
            >
              Main
            </SectionLink>
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
          </PillLinkContainer>
        )}
      </TopNav>

      <Section>
        {!activeSection ? (
          <RichContent key="parent" blocks={content} />
        ) : (
          <>
            <Content>
              <h2>{activeSection.name}</h2>
            </Content>
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
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      subLogoWidth
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
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawThumbnailPoster(resolveReferences: { maxDepth: 10 })
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

const TopNav: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color
}) => (
  <Section
    color={color}
    css={css`
      ${raggedEdgeGradient(
        [255, 255, 255],
        [239, 239, 239],
        'rgb(43, 102, 103)'
      )};
    `}
  >
    <Content css="padding-bottom: 1em">{children}</Content>
  </Section>
)

export const SubLogo = styled(Image)<{ width: number }>`
  width: ${props => props.width || 0}px;
  max-width: calc(100%);
  margin-bottom: 2em;
`

const SectionLink = styled(PillLink)`
  max-width: 13em;
`
