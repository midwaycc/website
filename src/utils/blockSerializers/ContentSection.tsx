import React from 'react'
import Section from '~/layout/Section'
import RichContent from '~/components/RichContent'
import { SanityImageProp } from '~/types/sanity-image'

type Props = {
  node?: {
    content: unknown[]
    color?: string
    backgroundImage?: SanityImageProp
    parallax?: boolean
  }
}

export function ContentSection({ node }: Props) {
  if (!node) return null

  console.log(node)

  return <Section color={node.color}>
    <RichContent blocks={node.content} />
  </Section>
}
