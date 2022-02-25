import React, { useMemo } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
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

  const { subLogo, subLogoWidth, name } = data.sanityMinistryPage
  const logoLink = useMemo(
    () =>
      subLogo && subLogo.asset && subLogo.asset.gatsbyImageData ? (
        <Link to={ministryRootURL || '/'}>
          <SubLogo
            alt={name + ' logo'}
            image={subLogo.asset.gatsbyImageData}
            $width={subLogoWidth || 0}
          />
        </Link>
      ) : null,
    [name]
  )

  return (
    <RaggedSection color="white">
      <Content>
        <Link to="/">
          <SquareButton dark thick point="left" style={{ marginBottom: '2em' }}>
            Home
          </SquareButton>
        </Link>
        {logoLink}
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

export const SubLogo = styled(GatsbyImage)<{ $width: number }>`
  width: ${props => props.$width || 0}px;
  max-width: calc(100%);
  margin-bottom: 2em;
  display: block;
`
