"use client";

import { ReactNode, useEffect, useState } from "react";
import Logo from "./Logo";
import { useThemeStore } from "@/store";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);

  //Import themes
  const themeStore = useThemeStore();

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
        <body
          className="font-inter bg-base-100 scrollbar scrollbar-none"
          data-theme={themeStore.mode}
        >
          {children}
        </body>
      )}
    </>
  );
}
