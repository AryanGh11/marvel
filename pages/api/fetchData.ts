"use client";

import { useEffect } from "react";
import { apiUrl } from "./apiUrl";

export default function fetchData(
  path: string,
  setData?: (val: any) => void | undefined,
  options?: {} | undefined,
) {
  const url = `${apiUrl}${path}`;
  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setData!(jsonData.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, []);
}
