import React from 'react'
import styled from 'styled-components'

const DAY_FONT_SIZE = 26
const DAY_MARGIN_TOP = 26
const DAY_LINE_HEIGHT = 39
export const DAY_TOTAL_HEIGHT = DAY_MARGIN_TOP + DAY_LINE_HEIGHT

export function Day(props: {
  name: string
  date: string
  children: React.ReactNode
}) {
  return (
    <div>
      <DayName>
        {props.name}
        {props.date && <span>({props.date})</span>}
      </DayName>
      {props.children}
    </div>
  )
}

const DayName = styled.h2`
  color: white;
  margin: 0;
  text-transform: uppercase;
  margin-top: ${DAY_MARGIN_TOP}px;
  font-size: ${DAY_FONT_SIZE}px;
  line-height: ${DAY_LINE_HEIGHT}px;

  span {
    font-size: 0.9em;
    margin-left: 0.8ch;
    opacity: 0.8;
  }
`
