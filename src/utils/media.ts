type StringCompatibleQuery = MediaQueryWithWidth & string

class MediaQueryWithWidth {
  width: string
  rule: string

  constructor(width: string, rule: string = 'min-width') {
    this.width = width
    this.rule = rule
  }

  toString() {
    return `@media (${this.rule}: ${this.width})`
  }

  plus(amount: string) {
    const width = `calc(${this.width} + ${amount})`
    return new MediaQueryWithWidth(width) as StringCompatibleQuery
  }
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export default {
  xs: new MediaQueryWithWidth('30em'),
  sm: new MediaQueryWithWidth('35.5em'),
  md: new MediaQueryWithWidth('48em'),
  lg: new MediaQueryWithWidth('60em'),
  xl: new MediaQueryWithWidth('75em')
} as Record<Size, StringCompatibleQuery>
