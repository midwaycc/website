import { niceDate } from './niceDate'

describe('niceDate', () => {
  it('works for dates in the local time zone', () => {
    expect(niceDate('2020-01-01')).toEqual('January 1st, 2020')
    expect(niceDate('2020-07-07')).toEqual('July 7th, 2020')
  })

  // TODO: find a way to mock the timezone and test
})
