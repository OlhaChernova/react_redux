import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState = {
  like: 0,
  dislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => {
      state.like = state.like + 1
    }),
    addDislike: create.reducer((state: FeedbackSliceState) => {
      state.dislike = state.dislike + 1
    }),
    resetResults: create.reducer(() => feedbackInitialState),
  }),
  selectors: {
    feedbackData: (state: FeedbackSliceState) => state,
  },
})

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;


