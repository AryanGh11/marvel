"use client";

import { ReactNode, useEffect, useState } from "react";
import { useThemeStore } from "@/store";
import loadingIcon from "@/public/images/iron-head.png";
import logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();

  //set loader here
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1500);
  console.log(loader);
  //wait untill Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {!isHydreated ? (
        <body
          className="flex font-inter justify-center items-center w-full h-screen bg-primary"
          data-theme={themeStore.mode}
        >
          <Image src={loadingIcon} alt="loading-icon" />
        </body>
      ) : loader ? (
        <body className="flex font-inter justify-center items-center w-full h-screen bg-primary">
          <Image src={logo} alt="logo" width={200} height={200}/>
        </body>
      ) : (
        <body className="flex font-inter justify-center items-center w-full h-screen bg-primary">
          {children}
        </body>
      )}
    </>
  );
}
