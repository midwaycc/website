import React from 'react'
import styled, { css } from 'styled-components'
import Content from '~/layout/Content'
import { Title } from '~/components/Title'
import media from '~/utils/media'
import buildingHorizontal from '~/../static/images/building_horizontal.jpg'

export default () => {
  return (
    <Container>
      <Content css="z-index: 2; position: relative">
        <Title left color="white">
          Weekly Schedule
        </Title>
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
    background-size: 1920px;

    background-position: bottom left -150px;

    ${media.sm} {
      background-position: bottom -20px left -50px;
    }

    ${media.md} {
      background-position: bottom -25px left -50px;
    }

    ${media.lg} {
      background-position: bottom -30px left;
    }

    ${media.xl} {
      background-position: bottom -50px left;
    }

    @media screen and (min-width: 1920px) {
      background-size: 100vw;
      background-position: bottom -75px left;
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
