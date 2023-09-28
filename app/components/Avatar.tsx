"use client";

import { AvatarType } from "@/types/AvatarType";
import Image from "next/image";

export default function Avatar({ title, url }: AvatarType) {
  return (
    <div className="btn flex-nowrap border-solid border-[1px] border-primary w-24 h-24 p-2 rounded-full flex justify-center items-center">
      <Image
        src={url}
        alt={title}
        width={512}
        height={512}
        className="w-20 h-20 rounded-full"
      />
    </div>
  );
}
