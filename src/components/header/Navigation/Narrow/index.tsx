import React from 'react'
import styled from 'styled-components'
import media from '~/utils/media'

type Props = {
  navigationItems: any
}

export default ({ navigationItems }: Props) => {
  return <NarrowNavContainer>mobile nav</NarrowNavContainer>
}

const NarrowNavContainer = styled.div`
  display: block;

  ${media.lg} {
    display: none;
  }
`
