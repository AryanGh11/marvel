"use client";

import { motion } from "framer-motion";

export default function FirstSection() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="z-20 text-center leading-8 font-bold text-2xl"
    >
      <h1>
        Welcome to <span className="text-3xl p-1 bg-primary">MARVEL App!</span>{" "}
      </h1>
    </motion.div>
  );
}
