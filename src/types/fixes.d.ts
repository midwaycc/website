declare module '@rooks/use-window-size' {
  export default function useWindowSize(): {
    innerWidth: number | null
    innerHeight: number | null
    outerWidth: number | null
    outerHeight: number | null
  }
}
