"use client";

import { BackgroundsType } from "@/types/BackgroundsType";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundChanger({ data }: any) {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isLastBackground, setIsLastBackground] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isLastBackground) {
        // If reached last bg, start again from begining
        setCurrentBackgroundIndex(0);
        setIsLastBackground(false);
        clearInterval(intervalId);

        // Start again after 5s
        setTimeout(() => {
          startBackgroundRotation();
        }, 10000);
      } else {
        // Move to next bg
        setCurrentBackgroundIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        );
        setIsLastBackground(currentBackgroundIndex === backgrounds.length - 1);
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentBackgroundIndex, isLastBackground]);

  //Start from beginnig
  const startBackgroundRotation = () => {
    setCurrentBackgroundIndex(0);
    setIsLastBackground(false);
  };

  //Array images
  const backgrounds = data.map((background: BackgroundsType) => {
    return background.url;
  });

  return (
    <div className="w-full bg-base-100 text-neutral">
      {backgrounds[0] && (
        <Image
          className="w-full h-screen object-cover backdrop-filter blur-[1px]"
          src={backgrounds[currentBackgroundIndex]}
          width={720}
          height={720}
          priority
          alt="backgrounds"
        />
      )}
      <div className="bg-overlay_black z-[1] w-full h-screen absolute top-0 right-0"></div>
    </div>
  );
}
