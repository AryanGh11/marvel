"use client";

import spidey from "@/public/animations/spidey.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="bg-base-100 flex flex-col items-center h-screen">
      <Player autoplay loop src={spidey} className="w-1/2" />
      <motion.h1 className="font-bold" initial={{ x: -20 }} animate={{ x: 0 }}>
        Not found
      </motion.h1>
    </div>
  );
}
