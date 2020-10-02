import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import Content from '~/layout/Content'
import { Title } from '~/components/Title'
import { Alert } from '~/components/Alert'
import media from '~/utils/media'
import scheduleBackground from '~/../static/images/Footer_Image.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import {
  WeeklyScheduleQuery,
  SanityWeeklyScheduleDay
} from '~/types/graphqlTypes'
import RichContent from '~/sanity/RichContent'
import { getMostRecentMonday } from '~/utils/dateUtils'

// Based on previous em styles in the browser, for precise calculations
const DAY_MARGIN_TOP = 26
const DAY_FONT_SIZE = 26
const DAY_LINE_HEIGHT = 39
const EVENT_MARGIN_TOP = 11.5
const EVENT_FONT_SIZE = 19.2
const EVENT_LINE_HEIGHT = 24
const DAY_TOTAL_HEIGHT = DAY_MARGIN_TOP + DAY_LINE_HEIGHT
const EVENT_TOTAL_HEIGHT = EVENT_MARGIN_TOP + EVENT_LINE_HEIGHT

type SanityDays = Exclude<
  WeeklyScheduleQuery['sanityWeeklySchedule'],
  null | undefined
>['days']

export default () => {
  const data: WeeklyScheduleQuery = useStaticQuery(QUERY)
  const schedule = data.sanityWeeklySchedule
  if (!schedule) return null

  const start = getMostRecentMonday()
  console.log('START', start)
  const scheduleAlert = data.sanityScheduleAlert
  const { days } = schedule || {}
  const splitIndex = getSplitIndex(days)

  return (
    <Container>
      <Content css="position: relative">
        <Title left color="white">
          This Week
        </Title>
        <CalendarLink to="/calendar">See full calendar ›</CalendarLink>
        {scheduleAlert && scheduleAlert.active && scheduleAlert._rawMessage && (
          <Alert>
            <RichContent blocks={scheduleAlert._rawMessage} />
          </Alert>
        )}
        {schedule && (
          <Horizontal>
            <Column>{daysFor(start, (days || []).slice(0, splitIndex))}</Column>
            <Column>{daysFor(start, (days || []).slice(splitIndex))}</Column>
          </Horizontal>
        )}
      </Content>
    </Container>
  )
}

export const QUERY = graphql`
  query WeeklySchedule {
    sanityScheduleAlert {
      id
      _rawMessage
      active
    }
    sanityWeeklySchedule(active: { eq: true }) {
      days {
        label
        events {
          time
          description
        }
      }
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
        display: flex;
        width: 100%;
      `}
    >
      <EventTime>{props.time}</EventTime>
      <EventName>{props.name}</EventName>
    </div>
  )
}

function daysFor(start: Date, days: SanityDays) {
  if (!days) return []

  const daysToAdd: Record<string, number> = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  }

  for (let i = 0; i < 7; i++) {
    console.log('ADD', i, addDays(start, i))
  }

  return days.map(section =>
    section && section.label && section.events ? (
      <Day
        key={section.label}
        name={
          section.label +
          (section.label && daysToAdd[section.label]
            ? ` (${format(addDays(start, daysToAdd[section.label]), 'M/d')})`
            : '')
        }
      >
        {section.events.map((event, i) =>
          event && event.time && event.description ? (
            <Event key={i} time={event.time} name={event.description} />
          ) : null
        )}
      </Day>
    ) : null
  )
}

function getSplitIndex(days: SanityDays) {
  if (!days) return 0
  const differences = []
  let split = 0

  while (split <= days.length) {
    const [a, b] = [
      days.slice(0, split) as SanityWeeklyScheduleDay[],
      days.slice(split) as SanityWeeklyScheduleDay[]
    ]
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

function dayHeight(day: SanityWeeklyScheduleDay | void) {
  if (!day || !day.events) return 0
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

const CalendarLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  margin: 0.5em 0;

  ${media.lg} {
    text-align: left;
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
  padding-left: 1rem;

  ${media.sm} {
    padding-left: 3rem;
  }

  & + & {
    margin-top: 1.5rem;
  }

  ${media.md} {
    width: 50%;
    padding-left: 1rem;

    :first-of-type {
      padding-left: 3rem;
    }

    & + & {
      margin-top: 0;
    }
  }
`

const EventTime = styled.span`
  flex-grow: 0;
  width: 8em;
  margin-right: 1em;
  text-align: right;
  opacity: 0.8;
`

const EventName = styled.span`
  width: 100%;
  font-weight: bold;
`
