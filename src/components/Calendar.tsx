import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGrid from '@fullcalendar/daygrid'
import googleCalendar from '@fullcalendar/google-calendar'
import '@fullcalendar/core/main.css'

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

export default () => {
  const handleEventClick = info => {
    info.jsEvent.preventDefault()
    info.jsEvent.stopPropagation()
    alert(info.event._def.title)
  }

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGrid, googleCalendar]}
      googleCalendarApiKey="AIzaSyDhddcpnZvFan-d1e7AOTI3UM6of2QdcOk"
      eventClick={handleEventClick}
      eventSources={calendarIds.map(googleCalendarId => ({
        googleCalendarId,
        backgroundColor: '#9fb94b',
        borderColor: '#9fb94b',
        url: '#'
      }))}
    />
  )
}
