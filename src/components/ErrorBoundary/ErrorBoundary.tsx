import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import {
  ErrorContainer,
  ErrorHeader2,
  ErrorText,
} from "./ErrorBoundary.styles";
import { Button } from "../Button/Button";

const handleReload = () => window.location.reload();

const ErrorFallback = () => (
  <ThemeProvider theme={theme}>
    <ErrorContainer>
      <ErrorHeader2>Oops! Something went wrong.</ErrorHeader2>
      <ErrorText>
        We’re working to fix this issue. Please try again later.
      </ErrorText>
      <Button label="Reload" onClick={handleReload} styletype="primary" />
    </ErrorContainer>
  </ThemeProvider>
);

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error("Logging error:", error, info);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
