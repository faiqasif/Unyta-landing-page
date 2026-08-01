"use client";

import { useCallback, useEffect, useState } from "react";
import {
  fetchAllSubmissions,
  fetchBrands,
  fetchCreators,
  fetchDemoRequests,
} from "@/lib/firebase/adminData";

const FETCHERS = {
  all: fetchAllSubmissions,
  creators: fetchCreators,
  brands: fetchBrands,
  demoRequests: fetchDemoRequests,
};

const EMPTY_ALL = { creators: [], brands: [], demoRequests: [] };

/**
 * Loads one form collection (or all three for the dashboard). Refetches keep the
 * previous render in place — `refreshing` dims it instead of flashing a skeleton.
 */
export function useSubmissions(source = "all") {
  const [data, setData] = useState(source === "all" ? EMPTY_ALL : []);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(
    async (mode = "initial") => {
      if (mode === "refresh") setRefreshing(true);
      setError(null);
      try {
        const result = await FETCHERS[source]();
        setData(result);
        return result;
      } catch (err) {
        setError(err);
        return null;
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [source]
  );

  useEffect(() => {
    let active = true;
    setLoading(true);
    void (async () => {
      const result = await FETCHERS[source]().catch((err) => {
        if (active) setError(err);
        return null;
      });
      if (!active) return;
      if (result) setData(result);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [source]);

  return { data, loading, refreshing, error, refresh: () => load("refresh") };
}
