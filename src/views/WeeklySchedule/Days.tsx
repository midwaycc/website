import React from 'react'
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import { WeeklyScheduleQuery } from '~/types/graphqlTypes'
import { Day } from './Day'
import { Event } from './Event'

export type SanityDays = Exclude<
  WeeklyScheduleQuery['sanityWeeklySchedule'],
  null | undefined
>['days']

export function Days(props: { start: Date; days: SanityDays }) {
  if (!props.days) return null

  const daysToAdd: Record<string, number> = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  }

  return (
    <>
      {props.days.map(section =>
        section && section.label && section.events ? (
          <Day
            key={section.label}
            date={
              section.label && daysToAdd[section.label]
                ? format(addDays(props.start, daysToAdd[section.label]), 'M/d')
                : ''
            }
            name={section.label}
          >
            {section.events.map((event, i) =>
              event && event.time && event.description ? (
                <Event key={i} time={event.time} name={event.description} />
              ) : null
            )}
          </Day>
        ) : null
      )}
    </>
  )
}
