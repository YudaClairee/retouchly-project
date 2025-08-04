"use client";

import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";

export const useConvexQuery = (query, ...args) => {
  const result = useQuery(query, ...args);

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (result !== undefined) {
      setData(result);
      setError(null);
      setIsLoading(false);
    } else if (result === undefined) {
      // Convex returns undefined when loading or when there's no auth
      setIsLoading(true);
      setError(null);
    }
  }, [result]);

  return { data, error, isLoading };
};

export const useConvexMutation = (mutation) => {
  const mutationFn = useMutation(mutation);

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Changed to false initially

  const executeMutation = async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await mutationFn(...args);
      setData(result);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err);
      setIsLoading(false);
      throw err; // Re-throw so caller can handle
    }
  };

  return { data, error, isLoading, executeMutation };
};
