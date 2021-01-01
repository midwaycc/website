import { Rule } from '@sanity/validation'

export const weeklySchedule = {
  name: 'weeklySchedule',
  title: 'Weekly Schedule',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Weekly Schedule'
      }
    }
  },
  fields: [
    {
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [{ type: 'weeklyScheduleDay' }]
    }
  ]
}

export const weeklyScheduleDay = {
  name: 'weeklyScheduleDay',
  title: 'Weekly Schedule Day',
  type: 'object',
  preview: {
    select: {
      label: 'label',
      events: 'events'
    },
    prepare({ label, events }: any) {
      const pluralEvents = pluralize('event', events ? events.length : 0)
      return {
        title: `${label} (${events ? events.length : 0} ${pluralEvents})`
      }
    }
  },
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The weekday name',
      validation: (Rule: Rule) =>
        Rule.custom(
          label =>
            [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ].includes(label) || 'Must be a weekday name and nothing else'
        )
    },
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'weeklyScheduleEvent' }]
    }
  ]
}

export const weeklyScheduleEvent = {
  name: 'weeklyScheduleEvent',
  title: 'Weekly Schedule Event',
  type: 'object',
  preview: {
    select: {
      time: 'time',
      description: 'description'
    },
    prepare({ time, description }: any) {
      return { title: `${time} - ${description}` }
    }
  },
  fields: [
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: '"9:30 AM", "7:00 PM", etc.',
      validation: (Rule: Rule) =>
        Rule.custom((time: string) => {
          if (/\d\d?:\d\d (A|P)M/.test(time)) {
            return true
          }

          return 'Expected format: H:MM AM/PM (example: 5:00 PM, not 5 PM or 5:00 pm)'
        })
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]
}

function pluralize(base: string, length: number) {
  return length === 1 ? base : base + 's'
}
