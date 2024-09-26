import { useState, useEffect } from "react";
import axios from "axios";

export function useFlightOrderData(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchFlightData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchFlightData();
  }, [url]);

  return { data, loading, error };
}
