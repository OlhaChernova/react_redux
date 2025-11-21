import { StyledNavLink } from "./styles";
import type { NavigationLinkProps } from "./types";

function NavigationLink({ path, name }: NavigationLinkProps) {
  return (
    <StyledNavLink
      to={path}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
      })}
    >
      {name}
    </StyledNavLink>
  );
}

export default NavigationLink;
