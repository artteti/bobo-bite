import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

const ErrorFallback = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h2>Oops! Something went wrong.</h2>
    <p>We’re working to fix this issue. Please try again later.</p>
    <button onClick={() => window.location.reload()}>Reload</button>
  </div>
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
