"use client";

import { ReactNode, useEffect, useState } from "react";
import Logo from "./Logo";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);

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
