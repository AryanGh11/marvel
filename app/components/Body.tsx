"use client";

import Banners from "./Banners";

export default function Body() {
  return (
    <div className="flex flex-col gap-4">
      <Banners category="movies" title="Latest movie" />
      <Banners category="series" title="Latest series" />
    </div>
  );
}
