import React from 'react'
import loadable from '@loadable/component'
import { createGlobalStyle } from 'styled-components'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { colors } from '~/theme/colors'

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
      background-color: ${colors.mediumTeal.hex};

      a {
        color: white;
      }
    }

    .fc-list-event-dot {
      border-color: ${colors.lime.hex};
    }

    .fc-list-event {
      background-color: ${colors.white.hex};
      color: ${colors.mediumTeal.hex};
      cursor: default;

      :hover {
        background-color: ${colors.lightTurquoise.hex};
      }
    }

    .fc-today-button {
      display: none;
    }
  }
`
