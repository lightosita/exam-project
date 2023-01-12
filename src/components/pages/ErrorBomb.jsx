import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong :(</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const Bomb = () => {
  throw new Error("💥 CABOOM 💥");
};

const ErrorBomb = () => {
  const [explode, setExplode] = React.useState(false);
  return (
    <div>
      {!explode && (
        <button onClick={() => setExplode((e) => !e)}>toggle explode</button>
      )}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
};
export default ErrorBomb;
