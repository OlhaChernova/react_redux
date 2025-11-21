import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import {
  Footer,
  Header,
  HeaderLogoWrapper,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
} from "./styles";
import type { LayoutProps, NavLink } from "./types";
import Button from "components/Button/Button";
import { navLinksData } from "./data";
import NavigationLink from "components/NavigationLink/NavigationLink";


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const navLinks = navLinksData.map(({path,name}: NavLink) => {
    return <NavigationLink key={v4()} path={path} name={name} />;
  });

  const goToHomePage = () => {
    navigate("/");
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <LayoutComponent>
      <Header>
        <HeaderLogoWrapper>
          <Logo onClick={goToHomePage}></Logo>
          <Button name="<---" onClick={goToPreviousPage} />
        </HeaderLogoWrapper>
        <NavContainer>{navLinks}</NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Logo onClick={goToHomePage}></Logo>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
