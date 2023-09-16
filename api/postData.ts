"use client";

import { apiUrl } from "./apiUrl";

export default function postData(
  path: string,
  setData?: (val: any) => void | undefined,
  options?: {} | undefined,
) {
  const url = `${apiUrl}${path}`;
  async function postData() {
    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData!(jsonData.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return postData();
}
