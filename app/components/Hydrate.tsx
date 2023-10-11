"use client";

import { ReactNode, useEffect, useState } from "react";
import Logo from "./Logo";
import { useThemeStore } from "@/store";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);

  //Import themes
  const themeStore = useThemeStore();

  //Wait untill Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  //Resize message if screen too large
  const [windowsWidth, setWindowWidth] = useState(0);

  //Update window width when the window is resized
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [windowsWidth]);

  return (
    <>
      {windowsWidth < 500 ? (
        !isHydreated ? (
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
        )
      ) : (
        <h1 className="flex w-full h-screen justify-center items-center">
          Please make the page smaller
        </h1>
      )}
    </>
  );
}
