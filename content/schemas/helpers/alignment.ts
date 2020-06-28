export const alignment = [
  { title: 'Center', value: 'center' },
  { title: 'Left', value: 'left' },
  { title: 'Right', value: 'right' }
] as const

export type Align = typeof alignment[number]['value']
