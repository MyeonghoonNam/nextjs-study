import { useState, useEffect, useCallback } from "react";

const ErrorBoundary = () => {
  const ThrowError = useCallback(() => {
    const [error, setError] = useState(false);

    useEffect(() => {
      if (error) throw new Error("Error!!");
    }, [error]);

    return (
      <button type="button" onClick={() => setError(true)}>
        Error Throw
      </button>
    );
  });

  return <ThrowError />;
};

export default ErrorBoundary;
