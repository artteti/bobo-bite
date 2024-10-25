import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

type Props = {
  to: string;
  children: string;
};

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;

  &.active {
    color: green;
  }

  &:hover {
    color: orange;
  }
`;

const BoboNavLink = ({ to, children }: Props) => {
  return (
    <StyledNavLink
      to={to}
      // React Router automatycznie dodaje klasę 'active', gdy link jest aktywny
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </StyledNavLink>
  );
};

export const Menu = () => {
  return (
    <div>
      <nav>
        <BoboNavLink to={routes.HOME.path}>Home</BoboNavLink>
        <BoboNavLink to={routes.PROFILE.path}>Profile</BoboNavLink>
        <BoboNavLink to={routes.FAVORITE.path}>Favorite</BoboNavLink>
      </nav>
    </div>
  );
};
