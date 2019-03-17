type MediaQueryWithWidth = String & {
  width: string
}

const minWidth = (width: string) => {
  const query: Partial<MediaQueryWithWidth> = new String(
    `@media (min-width: ${width})`
  )
  query.width = width

  return query as MediaQueryWithWidth
}

export default {
  xs: minWidth('30em'),
  sm: minWidth('35.5em'),
  md: minWidth('48em'),
  lg: minWidth('60em'),
  xl: minWidth('75em')
}
