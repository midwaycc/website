declare module 'netlify-cms-app'
declare module '@sanity/block-content-to-react'

declare module '*.png' {
  const value: any
  export = value
}
declare module '*.mp4' {
  const value: any
  export = value
}
declare module '*.jpg' {
  const value: any
  export = value
}
declare module '*.svg' {
  const value: any
  export = value
}

declare module 'md5-slim' {
  export default function md5(message: string): string
}
