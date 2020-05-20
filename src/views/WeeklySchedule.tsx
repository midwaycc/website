import React from 'react'
import styled, { css } from 'styled-components'
import Content from '~/layout/Content'
import { Title } from '~/components/Title'
import { Alert } from '~/components/Alert'
import media from '~/utils/media'
import scheduleBackground from '~/../static/images/Footer_Image.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import { ScheduleAlertQuery } from '~/types/graphqlTypes'
import RichContent from '~/components/RichContent'

// Based on previous em styles in the browser, for precise calculations
const DAY_MARGIN_TOP = 26
const DAY_FONT_SIZE = 26
const DAY_LINE_HEIGHT = 39
const EVENT_MARGIN_TOP = 11.5
const EVENT_FONT_SIZE = 19.2
const EVENT_LINE_HEIGHT = 24
const DAY_TOTAL_HEIGHT = DAY_MARGIN_TOP + DAY_LINE_HEIGHT
const EVENT_TOTAL_HEIGHT = EVENT_MARGIN_TOP + EVENT_LINE_HEIGHT

const schedule = [
  {
    name: 'Sundays',
    events: [
      { time: '9:30 AM', label: 'Bible Study' },
      { time: '11:00 AM', label: 'Worship Service' },
      { time: '5:00 PM', label: 'Youth' },
      { time: '5:15 PM', label: 'Adult Q&A' }
    ]
  },
  {
    name: 'Wednesdays',
    events: [
      { time: '7:00 PM', label: 'Prayer Meeting' },
      { time: '7:00 PM', label: 'Youth D-Groups' }
    ]
  },
  {
    name: 'Thursdays',
    events: [{ time: '6:30 AM', label: "Men's Bible Study" }]
  }
]

export default () => {
  const data: ScheduleAlertQuery = useStaticQuery(QUERY)
  const alert = data.sanityScheduleAlert
  const splitIndex = getSplitIndex(schedule)

  return (
    <Container>
      <Content css="z-index: 2; position: relative">
        <Title left color="white">
          Weekly Schedule
        </Title>
        {alert && alert.active && alert._rawMessage && (
          <Alert>
            <RichContent blocks={alert._rawMessage} />
          </Alert>
        )}
        <Horizontal>
          <Column>{daysFor(schedule.slice(0, splitIndex))}</Column>
          <Column>{daysFor(schedule.slice(splitIndex))}</Column>
        </Horizontal>
      </Content>
    </Container>
  )
}

export const QUERY = graphql`
  query ScheduleAlert {
    sanityScheduleAlert {
      id
      active
      _rawMessage
    }
  }
`

function Day(props: { name: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        css={css`
          color: white;
          margin: 0;
          text-transform: lowercase;
          font-variant: small-caps;
          margin-top: ${DAY_MARGIN_TOP}px;
          font-size: ${DAY_FONT_SIZE}px;
          line-height: ${DAY_LINE_HEIGHT}px;
        `}
      >
        {props.name}
      </h2>
      {props.children}
    </div>
  )
}

function Event(props: { name: string; time: string }) {
  return (
    <div
      css={css`
        color: white;
        margin-top: ${EVENT_MARGIN_TOP}px;
        font-size: ${EVENT_FONT_SIZE}px;
        line-height: ${EVENT_LINE_HEIGHT}px;
      `}
    >
      <EventTime>{props.time}</EventTime>
      <EventName>{props.name}</EventName>
    </div>
  )
}

function daysFor(days: typeof schedule) {
  return days.map(section => (
    <Day key={section.name} name={section.name}>
      {section.events.map((event, i) => (
        <Event key={i} time={event.time} name={event.label} />
      ))}
    </Day>
  ))
}

function getSplitIndex(days: typeof schedule) {
  const differences = []
  let split = 0

  while (split <= days.length) {
    const [a, b] = [days.slice(0, split), days.slice(split)]
    const [aHeight, bHeight] = [sum(a.map(dayHeight)), sum(b.map(dayHeight))]
    differences.push(Math.abs(aHeight - bHeight))
    split++
  }

  let minimum = Infinity

  for (let i = 0; i < differences.length; i++) {
    if (minimum > differences[i]) {
      minimum = differences[i]
      split = i
    }
  }

  return split
}

function dayHeight(day: typeof schedule[0]) {
  return DAY_TOTAL_HEIGHT + EVENT_TOTAL_HEIGHT * day.events.length
}

function sum(a: number[]) {
  return a.reduce((x, y) => x + y, 0)
}

const Container = styled.div`
  width: 100%;
  background-color: #111;
  overflow: hidden;
  position: relative;

  padding-top: 2rem;
  padding-bottom: 4rem;

  ${media.md} {
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  ${media.lg} {
    padding-top: 4rem;
    padding-bottom: 8rem;
  }

  &:before {
    content: ' ';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background: url('${scheduleBackground}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right -275px;

    ${media.sm} {
      background-position: center right -250px;
    }

    ${media.md} {
      background-position: center right;
    }
  }
`

const Horizontal = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md} {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 2rem;

  ${media.sm} {
    padding-left: 4rem;
  }

  & + & {
    margin-top: 1.5em;
  }

  ${media.md} {
    width: 50%;
    padding-left: 0;

    :first-of-type {
      padding-left: 4rem;
    }

    & + & {
      margin-top: 0;
    }
  }
`

const EventTime = styled.span`
  display: inline-block;
  width: 5em;
  opacity: 0.8;
`

const EventName = styled.span`
  font-weight: bold;
`
