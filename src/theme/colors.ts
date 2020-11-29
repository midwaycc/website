import { rgb, rgba } from 'polished'

const colorObject = (r: number, g: number, b: number) =>
  ({
    hex: rgb(r, g, b),
    rgba: (a: number) => rgba(r, g, b, a)
  } as const)

export const colors = {
  // Original theme
  darkTeal: colorObject(10, 76, 77), // #0a4c4d
  mediumTeal: colorObject(43, 102, 103), // #2b6667
  turquoise: colorObject(14, 151, 153), // #099799
  lightTurquoise: colorObject(90, 167, 169), // #5aa7a9
  lime: colorObject(159, 185, 75), // #9fb94b
  olive: colorObject(115, 134, 55), // #738637

  // Additional
  brown: colorObject(82, 70, 55), // #524637
  lightTeal: colorObject(116, 147, 147), // #749393

  // Greyscale
  white: colorObject(255, 255, 255), // #ffffff
  grey0: colorObject(238, 238, 238), // #eeeeee
  grey1: colorObject(234, 234, 234), // #eaeaea
  black: colorObject(0, 0, 0) // #000000
} as const
