import React from "react";
import {
  MenuWrapper,
  LinksContainer,
  StyledNavLink,
  IconsContainer,
  LogoContainer,
} from "./Menu.styles";
import logoImage from "../../assets/logo.png";
import { FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

export const Menu: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MenuWrapper>
        <LogoContainer>
          <LinksContainer>
            <Link to="/">
              <img src={logoImage} alt="BoboBite Logo" />
            </Link>
          </LinksContainer>
        </LogoContainer>

        <LinksContainer>
          <li>
            <StyledNavLink to={"/recipes"}>Recipes</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={"/articles"}>Articles</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={"/about"}>About Us</StyledNavLink>
          </li>
        </LinksContainer>

        {/* Ikony użytkownika i wyszukiwarki */}
        <IconsContainer>
          <FaSearch title="Search" />
          <FaUser title="User Profile" />
        </IconsContainer>
      </MenuWrapper>
    </ThemeProvider>
  );
};
