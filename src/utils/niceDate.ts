import { format } from 'date-fns'

// Input like 2020-01-01
export function niceDate(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  return format(
    new Date(
      // 720 = 12 hours in minutes
      Date.UTC(y, m - 1, d) + 720 * 60 * 1000
    ),
    'MMMM do, yyyy'
  )
}
