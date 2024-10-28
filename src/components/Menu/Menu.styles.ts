import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #e9ecef;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
`;

export const LinksContainer = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; // Ukrywamy linki na urządzeniach mobilnych
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  padding: 5px 10px;
  font-size: 1em;

  &.active {
    color: #ff0000;
    font-weight: bold;
  }

  &:hover {
    color: #0056b3;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: 1.5em;
  color: #007bff;
  cursor: pointer;
`;
