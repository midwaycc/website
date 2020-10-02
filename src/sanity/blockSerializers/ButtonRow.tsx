import React from 'react'
import styled from 'styled-components'
import { ButtonLink, ProperButtonLink } from './ButtonLink'
import { SanityButtonRow } from '~/types/graphqlTypes'

type Props = {
  node?: SanityButtonRow
}

export function ButtonRow({ node }: Props) {
  if (!node || !node.buttons) return null

  return (
    <Container>
      {node.buttons.map((button, i) =>
        button && !button.hidden ? (
          <ButtonLink key={i} node={button as ProperButtonLink} inButtonRow />
        ) : null
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
