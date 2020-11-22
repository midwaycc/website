import React from 'react'
import styled from 'styled-components'

const EVENT_MARGIN_TOP = 11.5
const EVENT_FONT_SIZE = 19.2
const EVENT_LINE_HEIGHT = 24
export const EVENT_TOTAL_HEIGHT = EVENT_MARGIN_TOP + EVENT_LINE_HEIGHT

export function Event(props: { name: string; time: string }) {
  return (
    <EventContainer>
      <EventTime>{props.time}</EventTime>
      <EventName>{props.name}</EventName>
    </EventContainer>
  )
}

const EventContainer = styled.div`
  color: white;
  margin-top: ${EVENT_MARGIN_TOP}px;
  font-size: ${EVENT_FONT_SIZE}px;
  line-height: ${EVENT_LINE_HEIGHT}px;
  display: flex;
  width: 100%;
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
