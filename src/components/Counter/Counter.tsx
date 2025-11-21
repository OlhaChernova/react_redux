// import { useState } from "react";

import Button from "components/Button/Button";
import { ButtonWrapper, CounterWrapper, ResultContainer } from "./styles";
import type { CounterProps } from "./types";

function Counter({counter, onPlusClick, onMinusClick}: CounterProps) {

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" onClick={onMinusClick} isDanger/>
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;
