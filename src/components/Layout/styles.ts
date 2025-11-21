import styled from "@emotion/styled";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px;
  background-color: #a7c7d7ff;
  color: #0a2837ff;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 200px;
`;

export const Logo = styled.div`
  min-width: 80px;
  min-height: 80px;
  background-color: #0a2837ff;
  border-radius: 50%;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 16px;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #b2d7a7ff;
`;