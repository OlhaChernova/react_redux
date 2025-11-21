import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 550px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #a5a5a5;
  }
`;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`;