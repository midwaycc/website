import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { RichContent } from '~/sanity/RichContent'
import { media } from '~/utils/media'
import { GeneralAlertQuery } from '~/types/graphqlTypes'

export function GeneralAlert() {
  const data: GeneralAlertQuery = useStaticQuery(query)
  if (!data.sanityGeneralAlert) return null
  const { active, _rawContent } = data.sanityGeneralAlert

  return active ? (
    <AlertContainer>
      <RichContent blocks={_rawContent || []} />
    </AlertContainer>
  ) : null
}

const query = graphql`
  query GeneralAlert {
    sanityGeneralAlert {
      _rawContent
      active
    }
  }
`

const AlertContainer = styled.div`
  transition: max-height 2s ease;
  padding: 1em;
  padding-bottom: 0;
  text-align: center;
  margin-top: -1em;

  & > * {
    margin: 0 auto;
    padding: 0;
    max-width: ${media.xl.width};
  }
`
