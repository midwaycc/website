export const size = [
  { title: 'Full', value: 'full' },
  { title: 'Large', value: 'large' },
  { title: 'Medium', value: 'medium' },
  { title: 'Small', value: 'small' },
  { title: 'Tiny', value: 'tiny' },
  { title: 'Mini', value: 'mini' }
]

export type Size = typeof size[number]['value']
