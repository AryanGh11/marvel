"use client";

import { ReactNode, useEffect, useState } from "react";
import { useThemeStore } from "@/store";
import loadingIcon from "@/public/images/iron-head.png";
import Image from "next/image";
import Logo from "./Logo";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();

  //set loader here
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1500);
  //wait untill Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {!isHydreated ? (
        <body className="flex font-inter justify-center items-center w-full h-screen bg-primary">
          <Logo />
        </body>
      ) : (
        <body className="flex font-inter justify-center items-center w-full h-screen bg-primary">
          {children}
        </body>
      )}
    </>
  );
}
