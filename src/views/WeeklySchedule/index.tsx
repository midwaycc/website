import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Content from '~/layout/Content'
import { Title } from '~/components/Title'
import { Alert } from './Alert'
import { Days } from './Days'
import media from '~/utils/media'
import scheduleBackground from '~/../static/images/Footer_Image.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import { WeeklyScheduleQuery } from '~/types/graphqlTypes'
import RichContent from '~/sanity/RichContent'
import { getMostRecentMonday } from '~/utils/dateUtils'
import { getSplitIndex } from './splitIndex'

const QUERY = graphql`
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

export function WeeklySchedule() {
  const data: WeeklyScheduleQuery = useStaticQuery(QUERY)
  const schedule = data.sanityWeeklySchedule
  if (!schedule) {
    return null
  }

  const start = getMostRecentMonday()
  const scheduleAlert = data.sanityScheduleAlert
  const { days } = schedule || {}
  const splitIndex = getSplitIndex(days)

  return (
    <Container>
      <Content css="position: relative">
        <Title left color="white">
          This Week
        </Title>
        <CalendarLink>
          <Link to="/calendar">See full calendar ›</Link>
        </CalendarLink>
        {scheduleAlert && scheduleAlert.active && scheduleAlert._rawMessage && (
          <Alert>
            <RichContent blocks={scheduleAlert._rawMessage} />
          </Alert>
        )}
        {schedule && (
          <Horizontal>
            <Column>
              <Days start={start} days={(days || []).slice(0, splitIndex)} />
            </Column>
            <Column>
              <Days start={start} days={(days || []).slice(splitIndex)} />
            </Column>
          </Horizontal>
        )}
      </Content>
    </Container>
  )
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

const CalendarLink = styled.div`
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
