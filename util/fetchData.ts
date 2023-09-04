"use client";

import { useBackgroundImages } from "@/store";
import { useEffect } from "react";
import { apiUrl } from "./apiUrl";

export default function fetchData(path: string, setData: (val: any) => void) {
  useEffect(() => {
    const url = `${apiUrl}${path}`;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData.data);
        backgroundImages.setData(jsonData.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);
  //Store in storage
  const backgroundImages = useBackgroundImages();
}
