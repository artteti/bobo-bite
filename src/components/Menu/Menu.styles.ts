import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

export const StyledLogo = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.lg};

  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;

  svg:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
