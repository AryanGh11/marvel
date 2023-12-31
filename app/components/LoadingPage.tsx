"use client";

import Image from "next/image";
import loadingIcon from "@/public/images/iron-head.png";
import { motion } from "framer-motion";
import { useState } from "react";

interface TimerType {
  timer: number;
}

export default function LoadingPage({ timer }: TimerType) {
  const [hide, setHide] = useState(false);

  //Set time for hidding
  setTimeout(() => {
    setHide(true);
  }, timer * 1000);

  return (
    !hide && (
      <motion.div className="w-full h-screen absolute top-0 right-0 bg-primary z-30 flex flex-col gap-6 justify-center items-center ">
        <motion.div
          initial={{ scale: 1 }}
          transition={{ repeat: Infinity, duration: 0.5, repeatType: "mirror" }}
          animate={{ scale: 1.15 }}
        >
          <Image
            priority
            className="w-12 h-12"
            src={loadingIcon}
            alt="loading-icon"
          />
        </motion.div>
      </motion.div>
    )
  );
}
