import { Outlet } from "react-router-dom";
import { Menu } from "../Menu";
import { LayoutContainer, ContentContainer, Footer } from "./Layout.styles";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Menu />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer>&copy; {new Date().getFullYear()} BoboBite</Footer>
    </LayoutContainer>
  );
};
