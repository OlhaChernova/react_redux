import styled from "@emotion/styled";

interface ButtonStyledProps {
  isDanger?: boolean;
}

export const ButtonComponent = styled.button<ButtonStyledProps>`
  width: 100%;
  padding: 20px;
  background: ${({ isDanger }) => (isDanger ? "#761d0bff" : "#1f27f5")};
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
  background: grey;
}
`;


