import React from "react";
import {
  MenuWrapper,
  Logo,
  LinksContainer,
  StyledNavLink,
  IconsContainer,
} from "./Menu.styles";
import { FaUser, FaSearch } from "react-icons/fa";

export const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      {/* Logo */}
      <Logo>BoboBite</Logo>

      {/* Linki do sekcji */}
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
  );
};
