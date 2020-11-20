import React, { useState } from 'react'
import Modal from 'react-modal'
import FullCalendar, { EventApi } from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import useWindowSize from '@rooks/use-window-size'
import { format, addMinutes } from 'date-fns'

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
      <FullCalendar
        initialView="list"
        initialDate={new Date()}
        dayCount={30}
        dateIncrement={{ days: 30 }}
        plugins={[listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyDhddcpnZvFan-d1e7AOTI3UM6of2QdcOk"
        height="auto"
        eventClick={info => {
          info.jsEvent.preventDefault()
          info.jsEvent.stopPropagation()
          setEvent(info.event)
          setModalOpen(true)
        }}
        eventSources={calendars.map(googleCalendarId => ({ googleCalendarId }))}
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

// TODO: move this to Sanity
const calendars = [
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

function toEST(date: Date) {
  const offset = date.getTimezoneOffset()
  return addMinutes(date, offset)
}
