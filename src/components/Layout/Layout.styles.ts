import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
`;

export const ContentContainer = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.dark};
  color: white;
  text-align: center;
  font-size: 0.9em;

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 8px 15px;
  }
`;
