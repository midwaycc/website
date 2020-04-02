import React, { useState, useLayoutEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import RichContent from '~/components/RichContent'
import media from '~/utils/media'
import { GeneralAlertQuery } from '~/types/graphqlTypes'

const query = graphql`
  query GeneralAlert {
    sanityGeneralAlert {
      active
      _rawMessage
    }
  }
`

export default () => {
  const [alertRenderable, setAlertRenderable] = useState(false)
  const [alertExpanded, setAlertExpanded] = useState(false)

  useLayoutEffect(() => {
    setAlertRenderable(true)
    setTimeout(() => setAlertExpanded(true), 1500)
  }, [])

  const data: GeneralAlertQuery = useStaticQuery(query)
  if (!data.sanityGeneralAlert) return null
  const {
    active: alertActive,
    _rawMessage: alertMessage
  } = data.sanityGeneralAlert

  return alertRenderable && alertActive && alertMessage ? (
    <AlertContainer
      style={{ maxHeight: alertExpanded ? '75vh' : 0, marginTop: '-1em' }}
    >
      <RichContent blocks={alertMessage} />
    </AlertContainer>
  ) : null
}

const AlertContainer = styled.div`
  transition: max-height 2s ease;
  padding: 1em;
  padding-bottom: 0;
  text-align: center;

  & > * {
    margin: 0 auto;
    padding: 0;
    max-width: ${media.xl.width};
  }
`
