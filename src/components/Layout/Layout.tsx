import { Outlet } from "react-router-dom";
import { Menu } from "../Menu";
import { LayoutContainer, ContentContainer, Footer } from "./Layout.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Menu />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <Footer>&copy; {new Date().getFullYear()} BoboBite</Footer>
      </LayoutContainer>
    </ThemeProvider>
  );
};
