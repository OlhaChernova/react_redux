import { ButtonComponent } from "./styles";
import type { ButtonProps } from "./types";

// interface ButtonProps {
//   type: "button" | "submit" | "reset";
//   name: string;
//   onClick: () => void;
//   disabled: boolean;
// }

function Button({
  type = "button",
  name,
  onClick,
  disabled = false,
  isDanger
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      type={type}
      onClick={onClick}
      isDanger={isDanger}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
