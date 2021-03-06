export type StringCompatibleQuery = MediaQueryWithWidth & string

export class MediaQueryWithWidth {
  rule: string
  _width: number
  pixelWidth: number

  constructor(width: number, rule: string = 'min-width') {
    this._width = width
    this.rule = rule
    const baseFontSize =
      typeof window === 'undefined'
        ? 16
        : parseInt(
            window.getComputedStyle(document.body).getPropertyValue('font-size')
          )
    this.pixelWidth = this._width * baseFontSize
  }

  get width() {
    return this._width + 'rem'
  }

  toString() {
    return `@media (${this.rule}: ${this.width})`
  }

  plusEm(amount: number): StringCompatibleQuery {
    return new MediaQueryWithWidth(
      this._width + amount
    ) as StringCompatibleQuery
  }
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const media = {
  xs: new MediaQueryWithWidth(30),
  sm: new MediaQueryWithWidth(35.5),
  md: new MediaQueryWithWidth(48),
  lg: new MediaQueryWithWidth(60),
  xl: new MediaQueryWithWidth(75)
} as Record<Size, StringCompatibleQuery>
