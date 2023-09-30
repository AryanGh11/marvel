"use client";

import ContentLoader from "react-content-loader";

interface ThisType {
  rounded?: string;
}

export default function Skeleton({ rounded }: ThisType) {
  return (
    <ContentLoader
      preserveAspectRatio="16/9"
      height="100%"
      width="100%"
      foregroundColor="#202020"
      backgroundColor="#000000"
    >
      <rect
        x="0"
        y="0"
        rx={rounded ? rounded : "12"}
        ry={rounded ? rounded : "12"}
        width="100%"
        height="100%"
      />
    </ContentLoader>
  );
}
