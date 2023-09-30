"use client";

import { AvatarType } from "@/types/AvatarType";
import Image from "next/image";
import { useState } from "react";

export default function Avatar({ title, url }: AvatarType) {
  //Full preview of image
  const [isImageOpen, setIsImageOpen] = useState(false);
  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  return (
    <>
      <div className="btn flex-nowrap border-solid border-[1px] border-primary w-24 h-24 p-2 rounded-full flex justify-center items-center">
        <Image
          src={url}
          alt={title}
          width={512}
          height={512}
          className="w-20 h-20 rounded-full"
          onClick={handleImageClick}
        />
      </div>
      {isImageOpen && (
        <div
          className="fullscreen-image-overlay"
          onClick={() => setIsImageOpen(false)}
        >
          <Image src={url} alt={title} layout="fill" objectFit="contain" />
        </div>
      )}
    </>
  );
}
