import React from 'react'
import styled from 'styled-components'
import Section from '~/layout/Section'
import theme from '~/theme'
import Sermons from './Sermons'
import WorshipSchedule from './WorshipSchedule'
import Location from './Location'

export default () => (
  <Container color={theme.criticalInfo.background}>
    <WorshipSchedule />
    <Sermons />
    <Location />
  </Container>
)

const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;

  color: ${props => props.theme.criticalInfo.color};
  padding-top: 2em;
  padding-bottom: 5em;
`
