import React from 'react'
import InfoWidget from './InfoWidget'
import { css } from 'styled-components'

export default () => (
  <InfoWidget title="Worship Schedule">
    <WeeklyEvent name="Bible Study" time="9:30 AM" />
    <WeeklyEvent name="Worship Service" time="11:00 AM" />
  </InfoWidget>
)

const WeeklyEvent = (props: { name: string; time: string }) => (
  <div
    css={css`
      width: 14em;
      display: flex;
      justify-content: space-between;
      & + & {
        margin-top: 0.25em;
      }
    `}
  >
    <span css="font-weight: bold">{props.name}</span>
    <span css="opacity: 0.85">{props.time}</span>
  </div>
)
