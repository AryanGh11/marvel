"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from "./Skeleton";
import Link from "next/link";

interface ThisType {
  banner: {
    title: string;
    url: string;
    category: string;
    target: string;
  }[];
  category: string;
}

export default function BannersSlider({ banner, category }: ThisType) {
  const filteredBanner = banner.filter((e) => e.category === category);
  return (
    <div className="w-full">
      {filteredBanner.length != 0 ? (
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          interval={5000}
          centerMode={true}
        >
          {filteredBanner.map((b) => (
            <Link key={b.title} href={b.target}>
              <Image
                src={b.url}
                alt={b.title}
                height={1080}
                width={1080}
                className="w-full aspect-video object-cover rounded-2xl p-1 cursor-pointer"
                priority
                onClick={() => console.log(process.env.HOST_API)}
              />
            </Link>
          ))}
        </Carousel>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
