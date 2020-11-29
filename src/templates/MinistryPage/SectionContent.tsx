import React from 'react'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { RichContent } from '~/sanity/RichContent'
import { MinistryPageQuery, SanityPageSection } from '~/types/graphqlTypes'

type Props = {
  data: MinistryPageQuery
  path: string
  ministryRootURL: string
}

export function SectionContent({ data, path, ministryRootURL }: Props) {
  if (!data.sanityMinistryPage) {
    return null
  }

  if (path === ministryRootURL) {
    return (
      <Section>
        <RichContent blocks={data.sanityMinistryPage._rawContent} />
      </Section>
    )
  }

  const sections = data.sanityMinistryPage._rawSections as SanityPageSection[]
  const activeSection = sections.find(
    section =>
      section?.urlSuffix?.current &&
      path === ministryRootURL + '/' + section.urlSuffix.current
  )

  if (!activeSection) {
    return null
  }

  return (
    <Section>
      <Content>
        <h2>{activeSection.name}</h2>
      </Content>
      <RichContent blocks={activeSection.content || []} />
    </Section>
  )
}
