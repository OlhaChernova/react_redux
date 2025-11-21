export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  isDanger?: boolean;
}