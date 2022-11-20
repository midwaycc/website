import isSunday from 'date-fns/isSunday'

export function getMostRecentMonday() {
  const t = new Date()

  if (isSunday(t)) {
    t.setDate(t.getDate() - 7)
  }

  t.setDate(t.getDate() - t.getDay() + 1)

  return t
}

export function getShortDuration(from: string | void) {
  if (!from) {
    return 'never'
  }

  const seconds = Math.floor((Date.now() - new Date(from).getTime()) / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  if (seconds < 0) {
    return 'invalid'
  }

  if (seconds < 60) {
    return `${seconds}s ago`
  }

  if (seconds < 60 * 60) {
    const secondsLeft = seconds - minutes * 60
    return `${minutes}m ${secondsLeft}s ago`
  }

  if (seconds < 60 * 60 * 24) {
    const minutesLeft = minutes - hours * 60
    return `${hours}h ${minutesLeft}m ago`
  }

  const days = Math.floor(hours / 24)
  const hoursLeft = hours - days * 24
  return `${days}d ${hoursLeft}h ago`
}
