export default {
  name: 'weeklySchedule',
  title: 'Weekly Schedule',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description:
        "This is just for reference so it's clear which schedule this is (normal, summer, COVID, etc)"
    },
    {
      name: 'active',
      title: 'Active?',
      type: 'boolean',
      description:
        "Make sure only one schedule is marked as active. If there's more than one, a random one will be picked."
    },
    {
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              label: 'label',
              events: 'events'
            },
            prepare({ label, events }) {
              const pluralEvents = pluralize('event', events.length)
              return {
                title: `${label} (${events.length} ${pluralEvents})`
              }
            }
          },
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: '"Sundays", "Wednesdays", etc.'
            },
            {
              name: 'events',
              title: 'Events',
              type: 'array',
              of: [
                {
                  type: 'object',
                  preview: {
                    select: {
                      time: 'time',
                      description: 'description'
                    },
                    prepare({ time, description }) {
                      return { title: `${time} - ${description}` }
                    }
                  },
                  fields: [
                    {
                      name: 'time',
                      title: 'Time',
                      type: 'string',
                      description: '"9:30 AM", "7:00 PM", etc.'
                    },
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'string'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function pluralize(base, length) {
  return length === 1 ? base : base + 's'
}
