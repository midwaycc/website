import { format } from 'date-fns'

// Input like 2020-01-01
export function niceDate(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  return format(
    new Date(
      Date.UTC(y, m - 1, d) + new Date().getTimezoneOffset() * 60 * 1000
    ),
    'MMMM do, yyyy'
  )
}
