import styled from "styled-components";

export const ErrorContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
  padding: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const ErrorHeader2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

export const ErrorText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
`;
