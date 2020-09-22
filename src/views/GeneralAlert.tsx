import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import RichContent from '~/sanity/RichContent'
import media from '~/utils/media'
import { GeneralAlertQuery } from '~/types/graphqlTypes'

const query = graphql`
  query GeneralAlert {
    sanityGeneralAlert {
      _rawContent
      active
    }
  }
`

export default () => {
  const data: GeneralAlertQuery = useStaticQuery(query)
  if (!data.sanityGeneralAlert) return null
  const { active, _rawContent } = data.sanityGeneralAlert

  return active ? (
    <AlertContainer>
      <RichContent blocks={_rawContent || []} />
    </AlertContainer>
  ) : null
}

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
