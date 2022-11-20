import { getMostRecentMonday, getShortDuration } from './dateUtils'

describe('Weekly Schedule', () => {
  describe('getMostRecentMonday', () => {
    beforeAll(() => {
      jest.useFakeTimers()
    })

    afterAll(() => {
      jest.useRealTimers()
    })

    it('Works for the middle of the month', () => {
      jest.setSystemTime(new Date(2020, 8, 25)) // Friday, September 25
      expect(getMostRecentMonday()).toEqual(new Date(2020, 8, 21)) // Monday, September 21
    })

    it('Works across month boundaries', () => {
      jest.setSystemTime(new Date(2020, 9, 2)) // Friday, October 2
      expect(getMostRecentMonday()).toEqual(new Date(2020, 8, 28)) // Monday, September 28
    })

    it('Works on Mondays', () => {
      jest.setSystemTime(new Date(2020, 8, 28)) // Monday, September 28
      expect(getMostRecentMonday()).toEqual(new Date(2020, 8, 28)) // Monday, September 28
    })

    it('Works on Sundays', () => {
      jest.setSystemTime(new Date(2020, 8, 27)) // Sunday, September 27
      expect(getMostRecentMonday()).toEqual(new Date(2020, 8, 21)) // Monday, September 21
    })
  })

  describe('getShortDuration', () => {
    beforeAll(() => {
      jest.useFakeTimers()
      jest.setSystemTime(new Date('2022-01-01T08:00:00Z'))
    })

    afterAll(() => {
      jest.useRealTimers()
    })

    it('rejects nonstrings', () => {
      expect(getShortDuration()).toEqual('never')
    })

    it('rejects negatives', () => {
      expect(getShortDuration('2022-01-01T08:01:00Z')).toEqual('invalid')
    })

    it('is correct for values under a minute', () => {
      expect(getShortDuration('2022-01-01T07:59:45Z')).toEqual('15s ago')
    })

    it('is correct for values under an hour', () => {
      expect(getShortDuration('2022-01-01T07:58:45Z')).toEqual('1m 15s ago')
    })

    it('is correct for values under a day', () => {
      expect(getShortDuration('2022-01-01T06:58:45Z')).toEqual('1h 1m ago')
    })

    it('is correct for values overc a day', () => {
      expect(getShortDuration('2021-12-30T06:58:45Z')).toEqual('2d 1h ago')
    })
  })
})
