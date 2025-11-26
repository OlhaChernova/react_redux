import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "../Button/Button"
import {
  FeedbackContainer,
  FeedbackResultsContainer,
  LikeDislikeContainer,
  Result,
} from "./styles"
import {
  feedbackActions,
  feedbackSelectors,
} from "store/redux/feedback/feedbackSlice"

function Feedback() {
  const { like, dislike } = useAppSelector(
    feedbackSelectors.feedbackData,
  )

  const dispatch = useAppDispatch()

  const addLike = () => {
    dispatch(feedbackActions.addLike())
  }

  const addDislike = () => {
    dispatch(feedbackActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackActions.resetResults())
  }

  return (
    <FeedbackContainer>
      <FeedbackResultsContainer>
        <LikeDislikeContainer>
          <Result>{like}</Result>
          <Button name="LIKE" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislike}</Result>
          <Button name="DISLIKE" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultsContainer>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </FeedbackContainer>
  )
}

export default Feedback
