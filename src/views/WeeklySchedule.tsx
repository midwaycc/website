import React from 'react'
import styled, { css } from 'styled-components'
import Content from '~/layout/Content'
import { Title } from '~/components/Title'
import media from '~/utils/media'
import buildingHorizontal from '~/../static/images/building_horizontal.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import { ScheduleAlertQuery } from '~/types/graphqlTypes'
import RichContent from '~/components/RichContent'

export default () => {
  const data: ScheduleAlertQuery = useStaticQuery(QUERY)
  const alert = data.sanityScheduleAlert

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
          <Column>
            <Day name="Sundays">
              <Event time="9:30 AM" name="Bible Study" />
              <Event time="11:00 AM" name="Worship Service" />
              <Event time="5:00 PM" name="AWANA" />
              <Event time="5:00 PM" name="Youth" />
              <Event time="5:15 PM" name="Adult Q&A" />
            </Day>
          </Column>
          <Column>
            <Day name="Wednesdays">
              <Event time="7:00 PM" name="Prayer Meeting" />
              <Event time="7:00 PM" name="Youth D-Groups" />
            </Day>
            <Day name="Thursdays">
              <Event time="6:30 AM" name="Men's Bible Study" />
            </Day>
          </Column>
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
    <>
      <h2
        css={css`
          color: white;
          margin: 0;
          text-transform: lowercase;
          font-variant: small-caps;
          margin-top: 1em;
        `}
      >
        {props.name}
      </h2>
      {props.children}
    </>
  )
}

function Event(props: { name: string; time: string }) {
  return (
    <div
      css={css`
        color: white;
        font-size: 1.2em;
        margin-top: 0.6em;
      `}
    >
      <EventTime>{props.time}</EventTime>
      <EventName>{props.name}</EventName>
    </div>
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
    background: url('${buildingHorizontal}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom left 18%;

    ${media.sm} {
      background-position: bottom left -50px;
    }

    ${media.md} {
      background-position: bottom left -50px;
    }

    ${media.lg} {
      background-position: bottom left;
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

const Alert = styled.div`
  background-color: rgba(35, 74, 77, 0.75);
  margin: 1rem;
  padding: 1rem;
  border: 3px solid #9fb94b;

  p {
    font-size: 1.2em;
    line-height: 1.4em;
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }
`
