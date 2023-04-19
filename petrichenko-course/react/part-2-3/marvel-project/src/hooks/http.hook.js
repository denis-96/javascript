import { useState, useCallback } from "react";

function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok)
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        const json = response.json();
        setLoading(false);
        return json;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => setError(null), []);

  return { loading, makeRequest, error, clearError };
}

export default useHttp;
