"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ThisType {
  banner: {
    title: string;
    url: string;
    category: string;
  }[];
  category: string;
}

export default function BannersSlider({ banner, category }: ThisType) {
  const filteredBanner = banner.filter((e) => e.category === category);
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      {filteredBanner.map((b) => (
        <Image
          src={b.url}
          alt={b.title}
          height={1080}
          width={1080}
          className="w-full aspect-video object-cover rounded-lg"
          priority
        />
      ))}
    </Carousel>
  );
}
