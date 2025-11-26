import { createAppSlice } from "store/createAppSlice"
import { AdviceApiResponse, AdviceRandomizerSliceState } from "./types"
import axios from "axios"

const adviceRandomizerInitialState: AdviceRandomizerSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const adviceRandomizerSlice = createAppSlice({
  name: "ADVICE_RANDOMIZER",
  initialState: adviceRandomizerInitialState,
  reducers: create => ({
    getAdvice: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const result = await axios.get<AdviceApiResponse>(
            "https://api.adviceslip.com/advice",
          )
          return result.data.slip.advice
        } catch (error: unknown) {
          if (error instanceof Error) {
            return thunkApi.rejectWithValue(error.message)
          }
          return thunkApi.rejectWithValue("Advice error")
        }
      },
      {
        pending: state => {
          state.status = "loading"
          state.error = "undefined"
        },
        fulfilled: (state, action) => {
          state.data = [...state.data, action.payload]
          state.status = "success"
        },
        rejected: (state, action) => {
          state.error = action.payload as string
          state.status = "error"
        },
      },
    ),
     deleteAdvices: create.reducer(()=>adviceRandomizerInitialState )
      }),
  selectors: {
    adviceData: state => state,
  },
})

export const adviceRandomizerActions = adviceRandomizerSlice.actions
export const adviceRandomizerSelectors = adviceRandomizerSlice.selectors
