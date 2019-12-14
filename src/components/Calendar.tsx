import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Modal from 'react-modal'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import useWindowSize from '@rooks/use-window-size'
import media from '~/utils/media'
import { format, addMinutes } from 'date-fns'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/list/main.css'

Modal.setAppElement(document.body)

export default () => {
  const [event, setEvent] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { innerWidth } = useWindowSize()
  if (innerWidth === null) return null

  const isSmall = innerWidth < media.lg.pixelWidth

  const handleEventClick = info => {
    info.jsEvent.preventDefault()
    info.jsEvent.stopPropagation()
    console.log(info.event)
    setEvent(info.event)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <StyleOverrides />
      <FullCalendar
        key={String(isSmall)}
        defaultView={isSmall ? 'listMonth' : 'dayGridMonth'}
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyDhddcpnZvFan-d1e7AOTI3UM6of2QdcOk"
        eventClick={handleEventClick}
        eventSources={calendarIds.map(googleCalendarId => ({
          googleCalendarId,
          backgroundColor: '#9fb94b',
          borderColor: '#9fb94b',
          url: '#'
        }))}
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 5,
            backgroundColor: 'rgba(255,255,255,0.2)'
          },
          content: {
            zIndex: 6,
            top: 'calc(50% - 80px)',
            bottom: 'calc(50% - 80px)',
            left: 'calc(50% - 150px)',
            right: 'calc(50% - 150px)',
            padding: '1em'
          }
        }}
      >
        {event ? (
          <>
            <h4 css="margin-top: 0">{event._def.title}</h4>
            <p>{format(toEST(event._instance.range.start), 'h:mm a')}</p>
          </>
        ) : null}
      </Modal>
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
  .fc-day-grid-container {
    background-color: #5aa7a9;
  }

  .fc-today {
    color: #099799;
  }

  .fc-unthemed .fc-list-item:hover td {
    background-color: #5aa7a9 !important;
  }

  .fc-list-heading span {
    color: #2b6667;
  }
`

function toEST(date: Date) {
  const offset = date.getTimezoneOffset()
  return addMinutes(date, offset)
}
