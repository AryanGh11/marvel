"use client";

import Banners from "./Banners";

export default function Body() {
  return (
    <div className="flex flex-col gap-3">
      <Banners category="movies" title="Latest movie" />
      <Banners category="series" title="Latest series" />
      <Banners category="series" title="Latest series" />
      <Banners category="series" title="Latest series" />
      <Banners category="series" title="Latest series" />
      <Banners category="series" title="Latest series" />
      <Banners category="series" title="Latest series" />
      <Banners category="series" title="Latest series" />
    </div>
  );
}
