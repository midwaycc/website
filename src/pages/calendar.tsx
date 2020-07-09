import React from 'react'
import loadable from '@loadable/component'
import { createGlobalStyle } from 'styled-components'
import Section from '~/layout/Section'

const Calendar = loadable(() => import('~/components/Calendar'))

export default () => {
  return (
    <>
      <StyleOverrides />
      <Section>
        <Calendar />
      </Section>
    </>
  )
}

const StyleOverrides = createGlobalStyle`
  #___gatsby {
    .fc-list-day-cushion {
      background-color: #2b6667;

      a {
        color: white;
      }
    }

    .fc-list-event-dot {
      border-color: #9fb94b;
    }

    .fc-list-event {
      background-color: white;
      color: #2b6667;
      cursor: default;

      :hover {
        background-color: #5aa7a9;
      }
    }

      .fc-today-button {
        display: none;
      }
  }
`
