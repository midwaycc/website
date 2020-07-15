import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import Content from '~/layout/content'
import { getSerializers } from '~/sanity/serializers'
import { SanityContentSection } from '~/types/graphqlTypes'

type Props = {
  node?: SanityContentSection
}

type ContainerProps = {
  backgroundColor?: string | null
}

type WrapperProps = {
  children: React.ReactNode
  containerProps: ContainerProps
}

const serializers = getSerializers({ nested: true, ContentSection })

export function ContentSection(props: Props) {
  const { node } = props
  if (!node) return null

  const { squished, backgroundColor, content = [] } = node

  const Wrapper = squished ? ConstrainedWrapper : FullWidthWrapper

  return (
    <Wrapper containerProps={{ backgroundColor }}>
      <BlockContent blocks={content} serializers={serializers} />
    </Wrapper>
  )
}

function FullWidthWrapper({ children, containerProps = {} }: WrapperProps) {
  return (
    <Container {...containerProps}>
      <Content>{children}</Content>
    </Container>
  )
}

function ConstrainedWrapper({ children, containerProps = {} }: WrapperProps) {
  return (
    <Content>
      <Container {...containerProps}>{children}</Container>
    </Content>
  )
}

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
`
