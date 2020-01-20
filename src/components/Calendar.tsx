import React, { useState } from 'react'
import Modal from 'react-modal'
import { createGlobalStyle } from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import { EventApi } from '@fullcalendar/core/api/EventApi'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import useWindowSize from '@rooks/use-window-size'
import { format, addMinutes } from 'date-fns'

import '@fullcalendar/core/main.css'
import '@fullcalendar/list/main.css'

Modal.setAppElement(document.body)

const MODAL_HEIGHT = 300
const MODAL_WIDTH = 500

export default () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [event, setEvent] = useState<EventApi | null>(null)
  const width = useWindowSize().innerWidth

  if (width === null) return null

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <StyleOverrides />
      <FullCalendar
        defaultView="listMonth"
        plugins={[listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyDhddcpnZvFan-d1e7AOTI3UM6of2QdcOk"
        eventClick={info => {
          info.jsEvent.preventDefault()
          info.jsEvent.stopPropagation()
          setEvent(info.event)
          setModalOpen(true)
        }}
        eventSources={calendarIds.map(googleCalendarId => ({
          googleCalendarId,
          backgroundColor: 'white',
          borderColor: 'white',
          textColor: '#2b6667',
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
            top: `calc(50% - ${MODAL_HEIGHT / 2}px)`,
            bottom: `calc(50% - ${MODAL_HEIGHT / 2}px)`,
            left: width < MODAL_WIDTH ? 10 : `calc(50% - ${MODAL_WIDTH / 2}px)`,
            right:
              width < MODAL_WIDTH ? 10 : `calc(50% - ${MODAL_WIDTH / 2}px)`,
            maxWidth: '100vw',
            padding: '1em'
          }
        }}
      >
        {event && event._instance ? (
          <>
            <h4 css="margin-top: 0">{event._def.title}</h4>
            <p css="opacity: 0.8">
              {format(toEST(event._instance.range.start), 'h:mm a')}
            </p>
            <p>{event._def.extendedProps.description}</p>
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
  .fc-event-dot {
    background-color: #9fb94b !important;
  }
  .fc-unthemed .fc-list-item td {
    background-color: white !important;
    color: #2b6667 !important;
  }

  .fc-unthemed .fc-list-item:hover td {
    background-color: #5aa7a9 !important;
    color: white !important;
  }

  .fc-widget-header {
    background-color: #2b6667 !important;
  }

  .fc-list-heading span {
    color: white;
  }

  .fc-ltr .fc-list-heading-alt {
    float: unset !important;
  }

  .fc-ltr .fc-list-heading-alt:before {
    content: '-';
    margin: 0 0.5em;
  }

  .fc-today-button {
    display: none !important;
  }

  .fc-scroller {
    overflow: unset !important;
    height: unset !important;
  }
`

function toEST(date: Date) {
  const offset = date.getTimezoneOffset()
  return addMinutes(date, offset)
}
