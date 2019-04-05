import React from 'react'
import styled from 'styled-components'
import Section from '~/layout/Section'
import { Colors } from '~/theme/theme'
import Sermons from './Sermons'
import WorshipSchedule from './WorshipSchedule'
import Location from './Location'

export default () => (
  <Container color={colors.background}>
    <Sermons />
    <WorshipSchedule />
    <Location />
  </Container>
)

const colors: Colors = {
  background: '#524637',
  color: 'white'
}

const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;

  color: ${colors.color};
  padding-top: 3em;
  padding-bottom: 5em;
`
