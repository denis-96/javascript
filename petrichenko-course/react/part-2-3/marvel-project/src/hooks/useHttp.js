import { useState, useCallback } from "react";

function useHttp() {
  const [process, setProcess] = useState("waiting");
  const makeRequest = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setProcess("loading");
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok)
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        const json = await response.json();
        return json;
      } catch (e) {
        setProcess("failed");
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => {
    setProcess("loading");
  }, []);

  const succeedProcess = () => {
    setProcess("succeeded");
  };

  return { process, succeedProcess, makeRequest, clearError };
}

export default useHttp;
