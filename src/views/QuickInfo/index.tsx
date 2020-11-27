import React from 'react'
import styled from 'styled-components'
import { Columns } from './Columns'
import { LocationInfo } from './LocationInfo'
import { Welcome } from './Welcome'
import { raggedEdgeGradient } from '~/utils/raggedEdgeGradient'
import leaves from '~/../static/images/leaves.png'

export default () => {
  return (
    <Container>
      <Columns>
        <Leaves />
        <Welcome />
        <LocationInfo />
      </Columns>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(43, 102, 103);
  padding-top: 3em;
  padding-bottom: 5em;
  color: white;
  ${raggedEdgeGradient([43, 102, 103], [35, 74, 77])};
`

const Leaves = styled.img.attrs({ src: leaves })`
  position: absolute;
  height: 75px;
  width: auto;
  top: -105px;
  left: 1rem;
`
