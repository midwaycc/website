import { getMostRecentMonday } from './dateUtils'

describe('Weekly Schedule', () => {
  describe('getMostRecentMonday', () => {
    beforeAll(() => {
      jest.useFakeTimers('modern')
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
})
