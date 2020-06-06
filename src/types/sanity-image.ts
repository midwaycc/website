export type SanityImageProp = {
  asset: {
    url: string
    metadata: {
      lqip: string
      dimensions: {
        aspectRatio: number
        width: number
        height: number
      }
    }
  }
}
