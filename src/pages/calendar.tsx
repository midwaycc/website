import React from 'react'
import loadable from '@loadable/component'
import { createGlobalStyle } from 'styled-components'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'

const Calendar = loadable(() => import('~/components/Calendar'))

export default function CalendarPage() {
  return (
    <>
      <StyleOverrides />
      <Section>
        <Content>
          <Calendar />
        </Content>
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
