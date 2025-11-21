import type { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLink{
  path: string,
  name: string
}