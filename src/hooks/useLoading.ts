import { useState, useCallback } from "react";

interface UseLoadingOptions {
  initialLoading?: boolean;
}

export function useLoading(options: UseLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(options.initialLoading ?? false);
  const [error, setError] = useState<string | null>(null);

  const withLoading = useCallback(async <T>(fn: () => Promise<T>): Promise<T | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fn();
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setIsLoading(false);
    setError(null);
  }, []);

  return { isLoading, error, withLoading, reset, setError };
}