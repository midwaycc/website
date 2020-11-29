import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MinistryPageQuery, SanityPageSection } from '~/types/graphqlTypes'

type Props = {
  data: MinistryPageQuery
  path: string
  ministryRootURL: string
}

export function SectionLinks({ data, path, ministryRootURL }: Props) {
  if (!data.sanityMinistryPage) {
    return null
  }

  const sections = data.sanityMinistryPage._rawSections as SanityPageSection[]
  const visibleSections = Array.isArray(sections)
    ? sections.filter((section: SanityPageSection) => !section.hidden)
    : []

  if (!visibleSections.length) {
    return null
  }

  return (
    <Container>
      <PillLink to={ministryRootURL} $active={path === ministryRootURL}>
        Main
      </PillLink>
      {visibleSections.map(section => {
        const suffix = section.urlSuffix?.current ?? ''
        const sectionURL = ministryRootURL + '/' + suffix

        return (
          <PillLink
            key={section.name}
            to={sectionURL}
            $active={path === sectionURL}
          >
            {section.name}
          </PillLink>
        )
      })}
    </Container>
  )
}

const PillLink = styled(Link)<{ $active?: boolean }>`
  color: white;
  background-color: ${props => (props.$active ? '#9fb94b' : '#099799')};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 1.5em;
  flex-grow: 1;
  max-width: 13em;
`

const Container = styled.div`
  margin-top: -0.75em;
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75em;

  ${PillLink} {
    margin-left: 0.75em;
    margin-top: 0.75em;
  }
`
