import React from 'react'
import InfoWidget from './InfoWidget'
import styled, { css } from 'styled-components'
import media from '~/utils/media'

export default () => (
  <Container title="Weekly Schedule">
    <DayHeader>Sunday</DayHeader>
    <WeeklyEvent name="Bible Study" time="9:30 AM" />
    <WeeklyEvent name="Worship Service" time="11:00 AM" />
    <WeeklyEvent name="AWANA" time="5:00 PM" />
    <WeeklyEvent name="Youth" time="5:00 PM" />
    <WeeklyEvent name="Adult Q&A" time="5:15 PM" />

    <DayHeader>Wednesday</DayHeader>
    <WeeklyEvent name="Prayer Meeting" time="7:00 PM" />
    <WeeklyEvent name="Youth D-Groups" time="7:00 PM" />

    <DayHeader>Thursday</DayHeader>
    <WeeklyEvent name="Men's Bible Study" time="6:30 AM" />
  </Container>
)

const WeeklyEvent = (props: { name: string; time: string }) => (
  <div
    css={css`
      width: 14em;
      display: flex;
      justify-content: space-between;
      & + & {
        margin-top: 0.5em;
      }
    `}
  >
    <span css="font-weight: bold">{props.name}</span>
    <span css="opacity: 0.85">{props.time}</span>
  </div>
)

const DayHeader = styled.h3`
  font-weight: lighter;
  font-size: 22px;
  opacity: 0.8;

  :first-of-type {
    margin-top: 0;
  }
`

const Container = styled(InfoWidget)`
  margin-top: 0;
  width: 100%;

  ${media.lg} {
    width: 33.333333%;
  }
`
