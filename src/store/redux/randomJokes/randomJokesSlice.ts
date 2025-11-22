import axios from "axios"

import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./types"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          return result.data
        } catch (error: any) {
          return thunkApi.rejectWithValue(error.message)
        }
      },
      {
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = "undefined"
        },
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.data = [
            `${action.payload.setup} - ${action.payload.punchline}`,
            ...state.data,
          ]
          state.status = "success"
        },
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokesActions = randomJokesSlice.actions
export const randomJokesSelectors = randomJokesSlice.selectors
