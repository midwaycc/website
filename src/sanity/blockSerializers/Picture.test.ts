import { PERCENTS, PERCENT_ARRAY } from './Picture'

const ascending = (a: number, b: number) => (a > b ? 1 : -1)

describe('Picture block serializer', () => {
  test('the percent array matches the percents record', () => {
    const percentValues = Object.values(PERCENTS).sort(ascending)
    expect(percentValues).toEqual(PERCENT_ARRAY)
  })
})
