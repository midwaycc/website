import React from 'react'
import styled from 'styled-components'
import Section from '~/layout/Section'
import Sermons from './Sermons'
import WorshipSchedule from './WorshipSchedule'
import Location from './Location'

export default () => (
  <Container color="#524637">
    <Sermons />
    <WorshipSchedule />
    <Location />
  </Container>
)

const Container = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;

  color: white;
  padding-top: 3em;
  padding-bottom: 5em;
`
