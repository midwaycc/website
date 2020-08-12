import React, { useState } from 'react'
import styled, { css } from 'styled-components'
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

// Based on previous em styles in the browser, for precise calculations
const DAY_MARGIN_TOP = 26
const DAY_FONT_SIZE = 26
const DAY_LINE_HEIGHT = 39
const EVENT_MARGIN_TOP = 11.5
const EVENT_FONT_SIZE = 19.2
const EVENT_LINE_HEIGHT = 24
const DAY_TOTAL_HEIGHT = DAY_MARGIN_TOP + DAY_LINE_HEIGHT
const EVENT_TOTAL_HEIGHT = EVENT_MARGIN_TOP + EVENT_LINE_HEIGHT

type SanityDays = WeeklyScheduleQuery['allSanityWeeklySchedule']['nodes'][number]['days']

export default () => {
  const [navIndex, setNavIndex] = useState(0)
  const data: WeeklyScheduleQuery = useStaticQuery(QUERY)
  const schedule = data.allSanityWeeklySchedule.nodes[0]
  if (!schedule) return null

  const scheduleAlert = data.sanityScheduleAlert
  const { weekOf, days = [] } = schedule || {}
  const splitIndex = getSplitIndex(days)
  console.log(schedule)

  return (
    <Container>
      <Content css="position: relative">
        <Title left color="white">
          Weekly Schedule
        </Title>
        <NavigationRow>
          <BigArrow
            onClick={() => setNavIndex(i => i - 1)}
            visible={navIndex > 0}
          >
            &lsaquo;
          </BigArrow>
          <Subtitle>Week of {weekOf}</Subtitle>
          <BigArrow onClick={() => setNavIndex(i => i + 1)}>&rsaquo;</BigArrow>
        </NavigationRow>
        {/* {scheduleAlert && scheduleAlert.active && scheduleAlert._rawMessage && ( */}
        {/*   <Alert> */}
        {/*     <RichContent blocks={scheduleAlert._rawMessage} /> */}
        {/*   </Alert> */}
        {/* )} */}
        {schedule && (
          <Horizontal>
            <Column>{daysFor(days.slice(0, splitIndex))}</Column>
            <Column>{daysFor(days.slice(splitIndex))}</Column>
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
    allSanityWeeklySchedule(filter: { active: { eq: true } }, limit: 1) {
      nodes {
        weekOf
        days {
          label
          events {
            time
            description
          }
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
      `}
    >
      <EventTime>{props.time}</EventTime>
      <EventName>{props.name}</EventName>
    </div>
  )
}

function daysFor(days: SanityDays) {
  if (!days) return []
  return days.map(section =>
    section && section.label && section.events ? (
      <Day key={section.label} name={section.label}>
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

const NavigationRow = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;

  ${media.lg} {
    text-align: left;
  }
`

const Subtitle = styled.h2`
  display: inline-block;
  opacity: 0.8;
  font-size: calc(2rem * 0.625);
  font-variant: small-caps;
  text-transform: lowercase;

  ${media.sm} {
    font-size: calc(2.5rem * 0.625);
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
  display: inline-block;
  width: 5em;
  opacity: 0.8;
`

const EventName = styled.span`
  font-weight: bold;
`

const BigArrow = styled.span<{ visible?: boolean }>`
  display: inline-block;
  transform: scale(3) translateY(-0.1em);
  margin: 0 2em;
  color: #9fb94b;
  position: relative;
  cursor: pointer;
  user-select: none;
  visibility: ${props => (props.visible === false ? 'hidden' : 'visible')};

  ::before {
    content: ' ';
    position: absolute;
    border-radius: 0.5ch;
    top: 0.4em;
    left: -2px;
    width: 1ch;
    height: 1ch;
    background-color: #2b6667;
    z-index: -1;
  }
`
