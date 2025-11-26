export interface RandomJokesSliceState {
  data: string[]
  error: string | undefined
  status: "default" | "loading" | "success" | "error"
}
