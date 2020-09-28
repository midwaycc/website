import { Rule } from '@sanity/validation'
import isMonday from 'date-fns/isMonday'
import parseISO from 'date-fns/parseISO'

export default {
  name: 'weeklySchedule',
  title: 'Weekly Schedule',
  type: 'document',
  preview: {
    select: {
      label: 'label',
      weekOf: 'weekOf'
    },
    prepare({ label, weekOf }: any) {
      return {
        title: `${weekOf || 'Default'}${label ? ` (${label})` : ''}`
      }
    }
  },
  orderings: [
    {
      title: 'Chronological',
      name: 'chronological',
      customDefault: true,
      by: [{ field: 'weekOf', direction: 'desc' }]
    }
  ],
  fields: [
    {
      name: 'label',
      title: 'Optional Label',
      type: 'string',
      description:
        "This is just for reference (only shows up here in Sanity) so it's easier to tell which schedule this is (normal, summer, COVID, etc)"
    },
    {
      name: 'active',
      title: 'Active?',
      type: 'boolean',
      description:
        "If turned on, this schedule will be shown on the home page as long as it's either a default or dated to this week or a future week (past weeks will always be hidden)"
    },
    {
      name: 'weekOf',
      title: 'Week Of',
      type: 'date',
      description:
        'The Monday at the start of the week this applies to. Leave this blank if this schedule should be treated as a "fallback"/default when one isn\'t found with a current or future date.',
      validation: (Rule: Rule) =>
        Rule.custom(
          weekOf => !weekOf || isMonday(parseISO(weekOf)) || 'Must be a Monday'
        )
    },
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
