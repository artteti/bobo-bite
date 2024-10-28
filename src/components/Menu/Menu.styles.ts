import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid #b8c5d6;
`;

export const LogoContainer = styled.div`
  img {
    height: 50px;
    width: auto;
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
  color: black;
  text-decoration: none;
  font-size: 18px;

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
  font-size: 16px;
  color: black;
  cursor: pointer;

  svg:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
