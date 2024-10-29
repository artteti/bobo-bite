import React from "react";

import * as S from "./Menu.styles";
import logoImage from "../../assets/logo.png";
import { FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

export const Menu: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.MenuWrapper>
        <S.LinksContainer>
          <Link to="/">
            <S.StyledLogo src={logoImage} alt="BoboBite Logo" />
          </Link>
        </S.LinksContainer>

        <S.LinksContainer>
          <li>
            <S.StyledNavLink to={"/recipes"}>Recipes</S.StyledNavLink>
          </li>
          <li>
            <S.StyledNavLink to={"/articles"}>Articles</S.StyledNavLink>
          </li>
          <li>
            <S.StyledNavLink to={"/about"}>About Us</S.StyledNavLink>
          </li>
        </S.LinksContainer>

        {/* Ikony użytkownika i wyszukiwarki */}
        <S.IconsContainer>
          <FaSearch title="Search" />
          <FaUser title="User Profile" />
        </S.IconsContainer>
      </S.MenuWrapper>
    </ThemeProvider>
  );
};
