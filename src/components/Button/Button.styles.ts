import styled, { css } from "styled-components";

type StyledButtonProps = {
  styletype: "primary" | "secondary" | "disabled";
};

const primaryStyles = css`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }
`;

const secondaryStyles = css`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryDark};
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  }
`;

const disabledStyles = css`
  background-color: ${(props) => props.theme.colors.disabledColor};
  color: ${(props) => props.theme.colors.textDisabled};
  border: 1px solid ${(props) => props.theme.colors.disabledColor};
  cursor: not-allowed;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.disabledColor};
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ styletype }) => styletype === "primary" && primaryStyles}
  ${({ styletype }) => styletype === "secondary" && secondaryStyles}
  ${({ styletype }) => styletype === "disabled" && disabledStyles}
`;
