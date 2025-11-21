import type { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "email" | "tel" | "number" | "password";
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
