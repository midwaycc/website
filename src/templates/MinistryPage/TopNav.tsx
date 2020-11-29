import React from 'react'
import styled from 'styled-components'
import Image, { GatsbyImageProps, FluidObject } from 'gatsby-image'
import { Link } from 'gatsby'
import { Content } from '~/layout/Content'
import { Section } from '~/layout/Section'
import { SquareButton } from '~/components/SquareButton'
import { SectionLinks } from './SectionLinks'
import { raggedEdgeGradient } from '~/utils/raggedEdgeGradient'
import { colors } from '~/theme/colors'
import { MinistryPageQuery } from '~/types/graphqlTypes'

type Props = {
  data: MinistryPageQuery
  path: string
}

export function TopNav({ data, path }: Props) {
  const ministryRootURL = getMinistryRootURL(path)

  if (!ministryRootURL || !data.sanityMinistryPage) {
    return null
  }

  const { subLogo, subLogoWidth } = data.sanityMinistryPage

  return (
    <RaggedSection color="white">
      <Content>
        <Link to="/">
          <SquareButton dark thick point="left" css="margin-bottom: 2em">
            Home
          </SquareButton>
        </Link>
        {subLogo && subLogo.asset && (
          <Link to={ministryRootURL || '/'}>
            <SubLogo
              fluid={(subLogo.asset.fluid as FluidObject) || undefined}
              $width={subLogoWidth || 0}
            />
          </Link>
        )}
        <SectionLinks
          data={data}
          path={path}
          ministryRootURL={ministryRootURL}
        />
      </Content>
    </RaggedSection>
  )
}

export function getMinistryRootURL(path: string) {
  return path.match(/\/ministries\/([^/]+)/)?.[0] || null
}

const RaggedSection = styled(Section)`
  ${raggedEdgeGradient(
    [255, 255, 255],
    [239, 239, 239],
    colors.mediumTeal.hex
  )};
`

export const SubLogo = styled(Image)<GatsbyImageProps & { $width: number }>`
  width: ${props => props.$width || 0}px;
  max-width: calc(100%);
  margin-bottom: 2em;
`
