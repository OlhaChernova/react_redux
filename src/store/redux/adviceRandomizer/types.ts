export interface AdviceRandomizerSliceState {
  data: string []
  error: string | undefined
  status: "default" | "loading" | "success" | "error"
}

export interface AdviceApiResponse {
  slip: {
    advice: string
  }
}