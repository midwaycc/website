import isSunday from 'date-fns/isSunday'

export function getMostRecentMonday() {
  const t = new Date()

  if (isSunday(t)) {
    t.setDate(t.getDate() - 7)
  }

  t.setDate(t.getDate() - t.getDay() + 1)
  t.setTime(t.getTime() + 12 * 60 * 60 * 1000)

  return t
}
