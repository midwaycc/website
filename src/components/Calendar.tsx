import React from 'react'
import { createGlobalStyle } from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import '@fullcalendar/core/main.css'
import '@fullcalendar/list/main.css'

export default () => {
  return (
    <>
      <StyleOverrides />
      <FullCalendar
        defaultView="listMonth"
        plugins={[listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyDhddcpnZvFan-d1e7AOTI3UM6of2QdcOk"
        eventSources={calendarIds.map(googleCalendarId => ({
          googleCalendarId,
          backgroundColor: 'white',
          borderColor: 'white',
          textColor: '#2b6667',
          url: '#'
        }))}
      />
    </>
  )
}

const calendarIds = [
  // Children's non-recurring
  'bmassey@midwaycommunitychurch.org',
  // Church-wide events
  'midwaycommunitychurch.org_i3l782ghgf878icmpibcmin2nc@group.calendar.google.com',
  // Men's ministry
  'midwaycommunitychurch.org_pjhctre4r4u35mtrkmgkkpqc4k@group.calendar.google.com',
  // Missions
  'midwaycommunitychurch.org_aseeaf3ljg0nan0t4tr5m6qo7k@group.calendar.google.com',
  // Preschool
  'midwaycommunitychurch.org_rhl7o1d13tsme9gc3g42c6t6r4@group.calendar.google.com',
  // Women's ministry
  'midwaycommunitychurch.org_85839nfct9bhqjnsejgmqrqemg@group.calendar.google.com',
  // Youth ministry
  'midwaycommunitychurch.org_jh1327qfohm33th4kgaig3anhg@group.calendar.google.com'
]

const StyleOverrides = createGlobalStyle`
  .fc-unthemed .fc-list-item:hover td {
    background-color: #5aa7a9 !important;
  }

  .fc-list-heading span {
    color: #2b6667;
  }

  .fc-ltr .fc-list-heading-alt {
    float: unset !important;
  }

  .fc-ltr .fc-list-heading-alt:before {
    content: '-';
    margin: 0 0.5em;
  }
`
