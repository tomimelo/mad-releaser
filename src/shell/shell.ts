export interface Shell {
  which: (binary: string) => string | null
  assertsWhich: (binary: string) => string
  echo: (message: string) => void
}
