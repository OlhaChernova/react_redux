import { v4 } from "uuid"
import {
  AdviceRandomizerText,
  AdviceRandomizerContainer,
  AdviceRandomizerWrapper,
  ButtonWrapper,
  Error,
} from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  adviceRandomizerActions,
  adviceRandomizerSelectors,
} from "store/redux/adviceRandomizer/adviceRandomizerSlice"
import Spinner from "components/Spinner/Spinner"
import Button from "components/Button/Button"

function AdviceRandomizer() {
  const { data, error, status } = useAppSelector(
    adviceRandomizerSelectors.adviceData,
  )

  const dispatch = useAppDispatch()

  const getAdvice = () => {
    dispatch(adviceRandomizerActions.getAdvice())
  }

  const deleteAdvices = () => {
   dispatch(adviceRandomizerActions.deleteAdvices())
  }

  const advices = data.map(advices => {
    return <AdviceRandomizerText key={v4()}>{advices}</AdviceRandomizerText>
  })
  return (
    <AdviceRandomizerWrapper>
      <ButtonWrapper>
        <Button
          name="GET ADVICE"
          onClick={getAdvice}
          disabled={status === "loading"}
        />
      </ButtonWrapper>
      {status === "loading" && <Spinner />}
      <AdviceRandomizerContainer>{advices}</AdviceRandomizerContainer>
      {status === "error" && <Error>{error}</Error>}
       <ButtonWrapper>
       {data.length > 0 && (
        <Button name="DELETE ADVICES" onClick={deleteAdvices} isDanger/>
      )}
      </ButtonWrapper>
    </AdviceRandomizerWrapper>
  )
}
export default AdviceRandomizer
