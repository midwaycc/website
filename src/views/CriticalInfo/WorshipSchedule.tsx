import React from 'react'
import InfoWidget from './InfoWidget'
import styled, { css } from 'styled-components'
import media from '~/utils/media'

export default () => (
  <Container title="Sunday Schedule">
    <WeeklyEvent name="Bible Study" time="9:30 AM" />
    <WeeklyEvent name="Worship Service" time="11:00 AM" />
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

const Container = styled(InfoWidget)`
  margin-top: 0;
  width: 100%;

  ${media.lg} {
    width: 33.333333%;
  }
`
