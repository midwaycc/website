import { DAY_TOTAL_HEIGHT } from './Day'
import { SanityDays } from './Days'
import { EVENT_TOTAL_HEIGHT } from './Event'
import { SanityWeeklyScheduleDay } from '~/types/graphqlTypes'

export function getSplitIndex(days: SanityDays) {
  if (!days) return 0
  const differences = []
  let split = 0

  while (split <= days.length) {
    const [a, b] = [
      days.slice(0, split) as SanityWeeklyScheduleDay[],
      days.slice(split) as SanityWeeklyScheduleDay[]
    ]
    const [aHeight, bHeight] = [sum(a.map(dayHeight)), sum(b.map(dayHeight))]
    differences.push(Math.abs(aHeight - bHeight))
    split++
  }

  let minimum = Infinity

  for (let i = 0; i < differences.length; i++) {
    if (minimum > differences[i]) {
      minimum = differences[i]
      split = i
    }
  }

  return split
}

function dayHeight(day: SanityWeeklyScheduleDay | void) {
  if (!day || !day.events) return 0
  return DAY_TOTAL_HEIGHT + EVENT_TOTAL_HEIGHT * day.events.length
}

function sum(a: number[]) {
  return a.reduce((x, y) => x + y, 0)
}
