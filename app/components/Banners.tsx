"use client";

import { useState } from "react";
import fetchData from "@/pages/api/fetchData";
import BannersSlider from "./BannersSlider";

interface ThisType {
  title: string;
  category: string;
}

export default function Banners({ category, title }: ThisType) {
  //Fetch all banners from database
  const [banner, setBanner] = useState([]);
  fetchData("/banner", setBanner);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg px-3">{title}</h1>
      <BannersSlider banner={banner} category={category} />
    </div>
  );
}
